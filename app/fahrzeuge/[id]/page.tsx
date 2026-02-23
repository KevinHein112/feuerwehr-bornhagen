"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function FahrzeugDetail() {
  const { id } = useParams()
  const router = useRouter()

  const [vehicle, setVehicle] = useState<any>(null)
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    loadVehicle()
    loadImages()
  }, [])

  async function loadVehicle() {
    const { data } = await supabase
      .from("vehicles")
      .select("*")
      .eq("id", id)
      .single()

    setVehicle(data)
  }

  async function loadImages() {
    const { data } = await supabase
      .from("vehicle_images")
      .select("*")
      .eq("vehicle_id", id)

    setImages(data || [])
  }

  if (!vehicle)
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        Lade Fahrzeug...
      </main>
    )

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <button
          onClick={() => router.push("/fahrzeuge")}
          className="text-zinc-400 hover:text-red-500 transition"
        >
          ← Zurück zur Übersicht
        </button>
      </div>

      {/* ================= TITEL ================= */}
      <section className="text-center py-12">
        <h1 className="text-6xl font-bold text-red-500">
          {vehicle.type}
        </h1>
      </section>

      {/* ================= TECHNISCHE DATEN ================= */}
      <section className="max-w-3xl mx-auto px-6 mb-16">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Technische Daten
        </h2>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden">

          <table className="w-full text-left">
            <tbody>

              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-400">Funkrufname</td>
                <td className="p-4 font-semibold">{vehicle.funkname}</td>
              </tr>

              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-400">Besatzung</td>
                <td className="p-4">{vehicle.crew}</td>
              </tr>

              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-400">Baujahr</td>
                <td className="p-4">{vehicle.year}</td>
              </tr>

              <tr>
                <td className="p-4 text-zinc-400">Aufbauhersteller</td>
                <td className="p-4">{vehicle.manufacturer}</td>
              </tr>

            </tbody>
          </table>

        </div>

      </section>

      {/* ================= BILDER ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Bilder
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-xl group"
            >
              <img
                src={img.image_url}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </section>

    </main>
  )
}