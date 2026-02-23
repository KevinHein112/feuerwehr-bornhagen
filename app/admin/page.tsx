"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {

  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data } = await supabase.auth.getUser()
    if (!data.user) router.push("/login")
  }

  const [type, setType] = useState("")
  const [funkname, setFunkname] = useState("")
  const [crew, setCrew] = useState("")
  const [year, setYear] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState<File[]>([])

  /* ================= IMAGE UPLOAD ================= */

  async function uploadImages(vehicleId: number) {

    for (const image of images) {

      const fileName = `${Date.now()}-${image.name}`

      const { error } = await supabase.storage
        .from("vehicle-images")
        .upload(fileName, image)

      if (error) {
        console.error(error)
        continue
      }

      const { data } = supabase.storage
        .from("vehicle-images")
        .getPublicUrl(fileName)

      await supabase.from("vehicle_images").insert({
        vehicle_id: vehicleId,
        image_url: data.publicUrl,
      })
    }
  }

  /* ================= SAVE VEHICLE ================= */

  async function addVehicle() {

    const { data, error } = await supabase
      .from("vehicles")
      .insert({
        type,
        funkname,
        crew,
        year,
        manufacturer,
        description,
      })
      .select()
      .single()

    if (error) {
      console.error(error)
      alert("Fehler beim Speichern")
      return
    }

    await uploadImages(data.id)

    alert("Fahrzeug gespeichert ✅")

    setType("")
    setFunkname("")
    setCrew("")
    setYear("")
    setManufacturer("")
    setDescription("")
    setImages([])
  }

  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-20">

      <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-2xl space-y-5">

        <h1 className="text-3xl font-bold text-center">
          Fahrzeug hinzufügen
        </h1>

        <input
          placeholder="Fahrzeugtyp (TSF-W)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <input
          placeholder="Funkrufname"
          value={funkname}
          onChange={(e) => setFunkname(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <input
          placeholder="Besatzung"
          value={crew}
          onChange={(e) => setCrew(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <input
          placeholder="Baujahr"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <input
          placeholder="Aufbauhersteller"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <textarea
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded h-32"
        />

        <input
          type="file"
          multiple
          onChange={(e) =>
            setImages(Array.from(e.target.files || []))
          }
        />

        <button
          onClick={addVehicle}
          className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold"
        >
          Fahrzeug speichern
        </button>

      </div>

    </main>
  )
}