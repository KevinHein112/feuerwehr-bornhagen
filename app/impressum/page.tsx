export default function ImpressumPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">
            Impressum
          </h1>
        </section>

        <div className="space-y-6 text-zinc-300 leading-relaxed">

          <p><strong>Angaben gemäß § 5 TMG</strong></p>

          <p>
            Freiwillige Feuerwehr Bornhagen<br />
            Am Kulturzentrum 15<br />
            37318 Bornhagen<br />
            Deutschland
          </p>

          <p>
            <strong>Vertreten durch:</strong><br />
            Gemeindebrandmeister Norman Hein
          </p>

          <p>
            <strong>Kontakt:</strong><br />
            E-Mail: info@feuerwehr-bornhagen.de
          </p>

          <p>
            <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
            Kevin Hein
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Haftung für Inhalte
          </h2>

          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
            sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Haftung für Links
          </h2>

          <p>
            Unser Angebot enthält Links zu externen Websites Dritter,
            auf deren Inhalte wir keinen Einfluss haben. Deshalb können
            wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Urheberrecht
          </h2>

          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter sind als solche gekennzeichnet.
          </p>

        </div>

      </div>
    </main>
  )
}