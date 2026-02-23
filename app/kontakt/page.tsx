"use client"

import { useState } from "react"

export default function KontaktPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // Spam Schutz
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    setLoading(false)
    setSuccess(true)

    setForm({
      name: "",
      email: "",
      message: "",
      website: "",
    })
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          Kontakt
        </h1>

        <p className="text-zinc-400">
          Schreiben Sie uns eine Nachricht
        </p>
      </section>

      {/* FORMULAR */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6">

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* SPAM SCHUTZ (unsichtbar) */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
            />

            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="E-Mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Nachricht
              </label>

              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="
                  w-full
                  bg-zinc-900
                  border border-zinc-800
                  rounded-2xl
                  p-4
                  focus:outline-none
                  focus:border-red-600
                "
              />
            </div>

            <button
  disabled={loading}
  className="
    w-full
    bg-red-600
    hover:bg-red-700
    rounded-2xl
    py-4
    font-semibold
    transition
  "
>
  {loading ? "Senden..." : "Nachricht senden"}
</button>

            {success && (
              <p className="text-green-500 text-center">
                Nachricht erfolgreich gesendet ✅
              </p>
            )}

          </form>

        </div>
      </section>

    </main>
  )
}

/* INPUT COMPONENT */

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
}: any) {
  return (
    <div>
      <label className="block mb-2 text-sm text-zinc-400">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="
          w-full
          bg-zinc-900
          border border-zinc-800
          rounded-2xl
          p-4
          focus:outline-none
          focus:border-red-600
        "
      />
    </div>
  )
}