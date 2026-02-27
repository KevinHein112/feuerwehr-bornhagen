"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-24 z-40 bg-zinc-950 border-b border-zinc-800">

      <div className="max-w-6xl mx-auto px-6">

        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-center gap-12 py-4 text-lg font-semibold">

          <Link href="/" className="text-white hover:text-red-500 transition">
            Start
          </Link>

          <Link href="/fahrzeuge" className="text-white hover:text-red-500 transition">
            Fahrzeuge
          </Link>

          <Link href="/ansprechpartner" className="text-white hover:text-red-500 transition">
            Ansprechpartner
          </Link>

          <Link href="/kontakt" className="text-white hover:text-red-500 transition">
            Kontakt
          </Link>

        </div>

        {/* MOBILE BAR */}
       <div className="md:hidden flex justify-between items-center py-4 text-white">

  <span className="font-semibold text-lg">
    Menü
  </span>

  <button onClick={() => setOpen(!open)} className="text-white">
    {open ? <X size={28}/> : <Menu size={28}/>}
  </button>

</div>

{/* MOBILE MENU */}
{open && (
  <div className="md:hidden flex flex-col gap-6 pb-6 text-lg font-semibold text-white bg-black">

    <Link href="/" className="hover:text-red-500 transition" onClick={()=>setOpen(false)}>
      Start
    </Link>

    <Link href="/fahrzeuge" className="hover:text-red-500 transition" onClick={()=>setOpen(false)}>
      Fahrzeuge
    </Link>

    <Link href="/ansprechpartner" className="hover:text-red-500 transition" onClick={()=>setOpen(false)}>
      Ansprechpartner
    </Link>

    <Link href="/kontakt" className="hover:text-red-500 transition" onClick={()=>setOpen(false)}>
      Kontakt
    </Link>

  </div>
)}

      </div>

    </nav>
  )
}