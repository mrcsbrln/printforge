import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <main>
      <section className="container max-w-3xl px-4 py-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold">Datenschutzerklärung</h1>

        <div className="prose max-w-none">
          <h2 className="mb-2 text-xl font-semibold">1. Verantwortlicher</h2>
          <p className="mb-6 text-gray-700">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist:
            <br />
            Marcus Hartmann
            <br />
            Chodowieckistr. 25
            <br />
            10405 Berlin
            <br />
            info@marcus-hartmann.net
          </p>

          <h2 className="mb-2 text-xl font-semibold">
            2. Allgemeines zu dieser Website
          </h2>
          <p className="mb-6 text-gray-700">
            Diese Website ist ein privates, nicht-kommerzielles
            Portfolio-Projekt. Es findet keine Registrierung, kein Login und
            keine Übermittlung von Formulardaten an einen Server statt. Die
            Such-, Sortier- und Filterfunktionen dieser Website laufen
            ausschließlich über Adresszeilen-Parameter der jeweiligen Seite und
            werden nicht gespeichert oder an Dritte übermittelt.
          </p>

          <h2 className="mb-2 text-xl font-semibold">
            3. Keine Cookies, kein Tracking
          </h2>
          <p className="mb-6 text-gray-700">
            Diese Website setzt keine Cookies und keine Analyse-, Tracking- oder
            Marketing-Tools ein. Es werden keine Nutzerprofile erstellt und kein
            Nutzungsverhalten über einzelne Besuche hinweg ausgewertet.
          </p>

          <h2 className="mb-2 text-xl font-semibold">4. Hosting</h2>
          <p className="mb-4 text-gray-700">
            Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133,
            Covina, CA 91723, USA ("Vercel") gehostet. Vercel verarbeitet dabei
            automatisch technische Daten, die Ihr Browser beim Aufruf der
            Website übermittelt, insbesondere:
          </p>
          <ul className="mb-4 text-gray-700 list-disc list-inside">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>aufgerufene Seite / Datei</li>
            <li>Browsertyp und -version, Betriebssystem</li>
            <li>verweisende URL (Referrer)</li>
          </ul>
          <p className="mb-4 text-gray-700">
            Diese sogenannten Server-Logfiles werden zur technischen
            Bereitstellung und Absicherung der Website (z. B. zur Erkennung von
            Missbrauch und zur Fehlerbehebung) verarbeitet. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
            technisch fehlerfreien und sicheren Betrieb der Website).
          </p>
          <p className="text-gray-700">
            Vercel hat seinen Sitz in den USA, sodass bei der Nutzung eine
            Übermittlung personenbezogener Daten in ein Drittland stattfindet.
            Nach Angaben von Vercel erfolgt dies auf Grundlage von
            EU-Standardvertragsklauseln sowie im Rahmen des EU-U.S. Data Privacy
            Framework, dem sich Vercel unterworfen hat. Weitere Informationen
            finden Sie in der Datenschutzerklärung von Vercel:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">
            5. Ihre Rechte als betroffene Person
          </h2>
          <p className="mb-4 text-gray-700">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15–20
            DSGVO). Zudem steht Ihnen ein Widerspruchsrecht gegen die
            Verarbeitung Ihrer personenbezogenen Daten zu, die auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO erfolgt (Art. 21 DSGVO).
          </p>
          <p className="text-gray-700">
            Ihnen steht außerdem ein Beschwerderecht bei einer
            Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">
            6. Aktualität dieser Datenschutzerklärung
          </h2>
          <p className="text-gray-700">
            Diese Datenschutzerklärung ist aktuell gültig. Durch die
            Weiterentwicklung dieser Website kann es notwendig werden, diese
            Datenschutzerklärung zu ändern.
          </p>
        </div>
      </section>
    </main>
  );
}
