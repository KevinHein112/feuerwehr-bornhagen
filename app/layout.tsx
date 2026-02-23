import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import Navigation from "./components/Navigation"

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

          <div className="relative flex items-center justify-center h-24">

            {/* LOGO LINKS */}
            <div className="absolute left-6">
              <img
                src="/wappen.png"
                alt="Feuerwehr Bornhagen"
                className="h-20"
              />
            </div>

            {/* TITEL */}
            <h1 className="text-3xl font-bold tracking-wide text-center">
              Feuerwehr Bornhagen
            </h1>

            {/* SOCIAL */}
            <div className="absolute right-6 flex gap-6">

              <a
                href="https://www.instagram.com/ffw_bornhagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 transition"
              >
                <Instagram size={30} />
              </a>

              <a
                href="https://www.facebook.com/p/Feuerwehr-Bornhagen-100077586694312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                <Facebook size={30} />
              </a>

            </div>

          </div>

        </header>

        {/* ================= NAVIGATION ================= */}
        <Navigation />

        {/* ================= CONTENT ================= */}
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