import Image from "next/image";
import { cn } from "@/lib/utils";

export default function VintageCorner() {
  return (
    <main className="container mx-auto grid min-h-full grid-cols-1 items-start gap-12 p-4 lg:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-brand-teal">
          Welkom in &apos;My Vintage Corner&apos;
        </h1>
        <div className="space-y-4 text-muted-foreground">
          <p>
            U vind hier fantastische vintage kledingstukken uit de jaren
            &apos;50-&apos;60-&apos;70-&apos;80 en &apos;90. Daarnaast bieden
            wij hier diverse woonaccessoires en speelgoed uit deze periode te
            koop aan. De kleding wordt met zorg uitgezocht, gewassen en
            gestreken en waar nodig hersteld. Dit om niet alleen verspilling
            tegen te gaan, maar óók om deze fantastische items uit vroegere
            tijden een tweede kans te geven bij een echte liefhebber. Vanwege
            de extra zorg die we de kleding geven, ligt de prijs iets hoger
            dan van de kleding op de boven verdieping. U zult zien dat de
            prijzen nog steeds zéér schappelijk zijn!
          </p>
          <p>
            Kom gezellig eens langs om de sfeer te proeven en herinneringen
            aan vroegere tijden op te halen. En wie weet gaat u wel met een
            fantastisch vintage item naar huis!
          </p>
        </div>
      </div>

      <div className="grid auto-rows-[275px] grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Image
            key={i}
            src={`/vintage-corner/vintage-corner${i}.jpg`}
            alt={`Vintage Corner foto ${i}`}
            width={500}
            height={500}
            priority={i <= 2}
            className={cn(
              "h-full w-full rounded-lg object-cover ring-2 ring-brand-teal/20",
              "transition-all duration-300",
              "hover:scale-105 hover:shadow-lg hover:ring-brand-teal/30"
            )}
          />
        ))}
      </div>
    </main>
  );
}
