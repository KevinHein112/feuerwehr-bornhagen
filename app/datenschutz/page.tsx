export default function DatenschutzPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">
            Datenschutzerklärung
          </h1>
        </section>

        <div className="space-y-6 text-zinc-300 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            1. Datenschutz auf einen Blick
          </h2>

          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber,
            was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>

          <h2 className="text-2xl font-semibold">
            2. Verantwortliche Stelle
          </h2>

          <p>
            Freiwillige Feuerwehr Bornhagen<br />
            Am Kulturzentrum 15<br />
            37318 Bornhagen<br />
            Deutschland<br />
            E-Mail: info@feuerwehr-bornhagen.de
          </p>

          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h2 className="text-2xl font-semibold">
            3. Hosting
          </h2>

          <p>
            Diese Website wird bei einem externen Dienstleister gehostet:
          </p>

          <p>
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            USA
          </p>

          <p>
            Beim Aufruf unserer Website werden automatisch Informationen durch
            den Server erfasst (Server-Logfiles). Dies sind insbesondere:
          </p>

          <ul className="list-disc pl-6">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Browsertyp und Browserversion</li>
            <li>Betriebssystem</li>
            <li>Referrer URL</li>
          </ul>

          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            aufgrund unseres berechtigten Interesses an einer sicheren und stabilen
            Bereitstellung unserer Website.
          </p>

          <h2 className="text-2xl font-semibold">
            4. Datenerfassung über das Kontaktformular
          </h2>

          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
            Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen gespeichert.
          </p>

          <p>
            Zur technischen Umsetzung werden folgende Dienste verwendet:
          </p>

          <ul className="list-disc pl-6">
            <li>Supabase Inc. – Speicherung der Formulardaten</li>
            <li>Resend Inc. – Versand von E-Mail-Nachrichten</li>
          </ul>

          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            zur Bearbeitung Ihrer Anfrage.
          </p>

          <h2 className="text-2xl font-semibold">
            5. Soziale Medien
          </h2>

          <p>
            Auf unserer Website befinden sich Links zu sozialen Netzwerken
            (Instagram und Facebook). Beim Anklicken dieser Links verlassen Sie
            unsere Website. Es gelten anschließend die Datenschutzbestimmungen
            des jeweiligen Anbieters.
          </p>

          <h2 className="text-2xl font-semibold">
            6. Speicherdauer
          </h2>

          <p>
            Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck für die
            Datenverarbeitung entfällt oder Sie die Löschung verlangen, sofern
            keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>

          <h2 className="text-2xl font-semibold">
            7. Ihre Rechte
          </h2>

          <p>Sie haben jederzeit das Recht auf:</p>

          <ul className="list-disc pl-6">
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            8. Beschwerderecht bei der Aufsichtsbehörde
          </h2>

          <p>
            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu:
          </p>

          <p>
            Thüringer Landesbeauftragter für den Datenschutz und die Informationsfreiheit<br />
            Häßlerstraße 8<br />
            99096 Erfurt<br />
            https://www.tlfdi.de
          </p>

        </div>
      </div>
    </main>
  )
}