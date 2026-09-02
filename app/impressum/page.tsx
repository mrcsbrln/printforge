import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <main>
      <section className="container max-w-3xl px-4 py-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold">Impressum</h1>

        <div className="prose max-w-none">
          <h2 className="mb-2 text-xl font-semibold">Angaben gemäß § 5 DDG</h2>
          <p className="mb-6 text-gray-700">
            Marcus Hartmann
            <br />
            Chodowieckistr. 25
            <br />
            10405 Berlin
          </p>

          <h2 className="mb-2 text-xl font-semibold">Kontakt</h2>
          <a
            className="mb-6 text-gray-700"
            href="mailto:info@marcus-hartmann.net"
          >
            info@marcus-hartmann.net
          </a>

          <h2 className="mb-2 text-xl font-semibold">Hinweis</h2>
          <p className="mb-6 text-gray-700">
            Diese Website ist ein privates, nicht-kommerzielles
            Portfolio-Projekt zur Demonstration von
            Softwareentwicklungs-Fähigkeiten. Es werden keine Waren oder
            Dienstleistungen angeboten.
          </p>

          <h2 className="mb-2 text-xl font-semibold">Haftung für Inhalte</h2>
          <p className="mb-6 text-gray-700">
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 className="mb-2 text-xl font-semibold">Haftung für Links</h2>
          <p className="mb-6 text-gray-700">
            Diese Website enthält gegebenenfalls Links zu externen Websites
            Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann
            ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="mb-2 text-xl font-semibold">Urheberrecht</h2>
          <p className="text-gray-700">
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
            solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers.
          </p>
        </div>
      </section>
    </main>
  );
}
