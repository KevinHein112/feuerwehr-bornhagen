"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function FahrzeugePage() {

  const [vehicles, setVehicles] = useState<any[]>([])

  useEffect(() => {
    loadVehicles()
  }, [])

  async function loadVehicles() {

    const { data, error } = await supabase
      .from("vehicles")
      .select(`
        *,
        vehicle_images (
          image_url
        )
      `)
      .order("created_at", { ascending: false })

    if (!error && data) {
      setVehicles(data)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= TITLE ================= */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-bold mb-6">
          Unsere Fahrzeuge
        </h2>

        <p className="text-zinc-400">
          Technik für schnelle Hilfe und sichere Einsätze
        </p>
      </section>

      {/* ================= VEHICLES ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {vehicles.map((v) => {

            // ⭐ erstes Galerie Bild
            const preview =
              v.vehicle_images?.[0]?.image_url ||
              "/placeholder.jpg"

            return (
              <Link
                key={v.id}
                href={`/fahrzeuge/${v.id}`}
                className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <img
                  src={preview}
                  alt={v.type}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-red-500">
                    {v.type}
                  </h3>

                  <p className="text-zinc-400">
                    {v.funkname}
                  </p>
                </div>

              </Link>
            )
          })}

        </div>

      </section>

    </main>
  )
}