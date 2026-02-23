export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-[85vh] flex flex-col items-center justify-start pt-32 text-center px-6 bg-gradient-to-b from-zinc-900 to-black">

        <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Willkommen bei der
          <br />
          <span className="text-red-500">
            Freiwilligen Feuerwehr Bornhagen
          </span>
        </h2>


        <p className="text-red-500 text-4xl md:text-5xl font-bold tracking-wide drop-shadow-[0_0_25px_rgba(239,68,68,0.9)] mb-12">
          Wir stehen bereit – 365 Tage im Jahr, 24 Stunden am Tag. 
        </p>

        <div className="max-w-4xl text-zinc-300 text-xl md:text-2xl leading-relaxed space-y-6">

          <p>
            Die Feuerwehr Bornhagen steht für Sicherheit, schnelle Hilfe und
            verlässlichen Schutz in unserer Gemeinde.
          </p>

          <p>
            Ob Brandeinsatz, technische Hilfeleistung oder Unterstützung bei
            Unwetterlagen – auf uns können sich die Bürgerinnen und Bürger
            jederzeit verlassen.
          </p>

          <p>
            Mit moderner Ausrüstung, gut ausgebildeten Einsatzkräften und
            starkem Teamgeist engagieren wir uns täglich für den Schutz von
            Menschen, Tieren und Sachwerten.
          </p>

        </div>

      </section>


    </main>
  )
}