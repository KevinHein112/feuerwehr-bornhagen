import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export const metadata: Metadata = {
  title: "Freiwillige Feuerwehr Bornhagen",
  description: "Offizielle Website der Freiwilligen Feuerwehr Bornhagen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-black text-white">

        {/* ================= HEADER ================= */}
<header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-zinc-800">

  <div className="max-w-7xl mx-auto px-4 py-3">

    {/* MOBILE + DESKTOP FLEX */}
    <div className="flex items-center justify-between">

      {/* LOGO */}
      <img
        src="/wappen.png"
        alt="Feuerwehr Bornhagen"
        className="h-12 md:h-20"
      />

      {/* SOCIAL ICONS */}
      <div className="flex gap-4">

        <a
          href="https://www.instagram.com/ffw_bornhagen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-pink-500 transition"
        >
          <Instagram size={24} />
        </a>

        <a
          href="https://www.facebook.com/p/Feuerwehr-Bornhagen-100077586694312/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-blue-500 transition"
        >
          <Facebook size={24} />
        </a>

      </div>
    </div>

    {/* TITEL — eigene Zeile */}
    <h1 className="
      text-center
      text-lg md:text-3xl
      font-semibold
      tracking-wide
      mt-2
    ">
      Freiwillige Feuerwehr Bornhagen
    </h1>

  </div>

</header>
        

        {/* ================= NAVIGATION ================= */}
        <nav className="sticky top-24 z-40 bg-zinc-950 border-b border-zinc-800">

          <div className="max-w-6xl mx-auto flex justify-center gap-12 py-4 text-lg font-semibold">

            <Link href="/" className="hover:text-red-500 transition">
              Start
            </Link>

            <Link href="/fahrzeuge" className="hover:text-red-500 transition">
              Fahrzeuge
            </Link>

            <Link href="/ansprechpartner" className="hover:text-red-500 transition">
              Ansprechpartner
            </Link>

            <Link href="/kontakt" className="hover:text-red-500 transition">
              Kontakt
            </Link>

          </div>

        </nav>

        {/* ================= PAGE CONTENT ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-zinc-800 text-center text-zinc-500 py-10 text-sm">

          <p className="mb-4">
            © {new Date().getFullYear()} Freiwillige Feuerwehr Bornhagen
          </p>

          <div className="flex justify-center gap-6">

            <Link href="/impressum" className="hover:text-white transition">
              Impressum
            </Link>

            <Link href="/datenschutz" className="hover:text-white transition">
              Datenschutz
            </Link>

          </div>

        </footer>

      </body>
    </html>
  )
}