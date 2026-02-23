"use client"

import { useEffect, useMemo, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AnsprechpartnerPage() {
  const [contacts, setContacts] = useState<any[]>([])

  useEffect(() => {
    loadContacts()
  }, [])

  async function loadContacts() {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at")

    if (!error && data) setContacts(data)
  }

  const GROUPS = {
    Wehrführung: "brandmeister",
    Jugendfeuerwehr: "jugend",
    Gerätewart: "geräte",
    Verein: "verein",
  }

  const groupedContacts = useMemo(() => {
    return Object.entries(GROUPS).map(([title, keyword]) => ({
      title,
      people: contacts.filter(c =>
        c.role?.toLowerCase().includes(keyword)
      ),
    }))
  }, [contacts])

  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-bold mb-6">
          Ansprechpartner
        </h2>

        <p className="text-zinc-400 text-3xl">
          Feuerwehr Bornhagen
        </p>
      </section>

      {/* SECTIONS */}
      <div className="max-w-6xl mx-auto px-6">
        {groupedContacts.map(({ title, people }) =>
          people.length ? (
            <ContactSection
              key={title}
              title={title}
              people={people}
            />
          ) : null
        )}
      </div>

    </main>
  )
}

/* ================= SECTION ================= */

function ContactSection({ title, people }: any) {
  return (
    <section className="py-20">

      {/* GROUP TITLE CENTERED */}
      <h2 className="
        text-3xl
        font-semibold
        text-red-500
        text-center
        mb-12
      ">
        {title}
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        {people.map((person: any) => (
          <ContactCard key={person.id} person={person} />
        ))}
      </div>

    </section>
  )
}

/* ================= CARD ================= */

function ContactCard({ person }: any) {
  return (
    <div
      className="
        group
        bg-zinc-900
        rounded-2xl
        p-8
        border
        border-zinc-800
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-zinc-800
        hover:border-red-600
        hover:shadow-xl
        hover:shadow-red-600/20
      "
    >
      {/* NAME */}
      <p className="
        text-2xl
        font-bold
        mb-2
        transition
        group-hover:text-red-500
      ">
        {person.name}
      </p>

      {/* ROLE */}
      <p className="text-zinc-400 text-lg">
        {person.role}
      </p>
    </div>
  )
}