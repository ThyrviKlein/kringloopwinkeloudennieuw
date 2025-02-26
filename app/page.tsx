import { cn } from "@/lib/utils";

const BUSINESS_HOURS = {
  Maandag: "Gesloten",
  Dinsdag: "10:00 - 17:00",
  Woensdag: "10:00 - 17:00",
  Donderdag: "10:00 - 17:00",
  Vrijdag: "10:00 - 17:00",
  Zaterdag: "10:00 - 17:00",
  Zondag: "Gesloten",
} as const;

export default function Home() {
  return (
    <main className="container mx-auto grid min-h-full grid-cols-1 items-center gap-12 p-4 lg:grid-cols-2">
      <section className="mx-auto max-w-2xl space-y-8 text-center lg:mx-0 lg:text-left">
        <h1 className="text-xl font-bold tracking-tight text-brand-teal md:text-3xl">
          Welkom op de website van Kringloopwinkel Oud & Nieuw
        </h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Onze kringloopwinkel is opgericht door{" "}
            <span className="font-bold text-brand-teal">Suzanna</span> en{" "}
            <span className="font-bold text-brand-green">
              Jan Willem Arensman
            </span>{" "}
            en samen met onze vrijwilligers runnen zij met heel veel plezier de
            winkel aan de Prins Bernhardstraat in Bodegraven.
          </p>

          <div>
            <h2 className="mb-2 font-semibold text-brand-teal">
              Onze visie en doelstellingen
            </h2>
            <p>
              Wij zijn deze winkel begonnen omdat we steeds meer armoede in onze
              omgeving zagen. Dat is dan ook meteen één van onze doelen. Het
              helpen van mensen door het verkopen van betaalbare tweedehands
              artikelen. Daarnaast zien we dat er enorm veel verspilling in de
              wereld is; dus proberen wij op onze eigen wijze, bij te dragen aan
              een circulaire economie. Dat wil zeggen dat bestaande materialen
              en producten zo lang mogelijk worden hergebruikt, hersteld,
              opgeknapt en gerecycleerd om de levensduur van deze producten
              zoveel mogelijk te verlengen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-brand-teal">
              Sociale functie
            </h2>
            <p>
              Tot slot is het voor ons ook heel belangrijk om een sociale
              functie te dienen. Er is veel eenzaamheid in de wereld en wij
              hopen dat onze kringloop een plek is waar mensen kunnen samenkomen
              voor een kop goede koffie en een gesprek. U vind dan ook midden in
              onze winkel een lange tafel met aan het einde een koffie machine.
              Hier mag iedereen gratis een heerlijke kop koffie, cappuccino,
              thee, of warme chocolademelk nemen. Gezelligheid staat bij ons
              hoog in het vaandel. En wat is er nou gezelliger dan samen aan een
              bakkie koffie, met een lekker koekje? En dan worden we óók nog
              omringd door talloze mooie en leuke items die voor kleine prijzen
              met u mee naar huis mogen, wat wil een mens nog meer?
            </p>
          </div>

          <p className="font-medium text-brand-teal">
            Wij hopen u snel te mogen ontmoeten in onze winkel!
          </p>
        </div>
      </section>

      <section
        className={cn(
          "mx-auto h-fit w-full max-w-md rounded-xl",
          "border border-brand-teal/20 bg-gradient-to-br from-brand-teal/5 to-brand-green/5",
          "p-8 shadow-xl backdrop-blur-sm",
        )}
      >
        <h2 className="mb-6 text-center text-3xl font-semibold text-brand-teal">
          Openingstijden
        </h2>
        <p className="text-center font-bold text-muted-foreground">
          Let op; inname is dinsdag gesloten!
        </p>
        <div className="space-y-4">
          {Object.entries(BUSINESS_HOURS).map(([day, hours]) => (
            <div
              key={day}
              className="flex items-center justify-between border-b border-border py-2 last:border-0"
            >
              <span className="font-medium text-card-foreground">{day}</span>
              <span className="text-muted-foreground">{hours}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
