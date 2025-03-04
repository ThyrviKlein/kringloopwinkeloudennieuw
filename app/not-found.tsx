import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-6 p-4 text-center">
      <h1 className="text-4xl font-bold text-brand-teal">
        404 - Pagina niet gevonden
      </h1>
      <p className="max-w-md text-muted-foreground">
        Sorry, we kunnen de pagina die u zoekt niet vinden. Deze pagina bestaat
        niet of is verplaatst.
      </p>
      <Button asChild className="mt-4">
        <Link href="/">Terug naar home</Link>
      </Button>
    </main>
  );
}
