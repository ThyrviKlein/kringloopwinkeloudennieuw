import { EmployeeGrid } from "@/components/Employee";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <main className="container mx-auto flex min-h-full flex-col gap-12 p-4">
      <h1 className={cn("text-2xl font-semibold text-brand-teal", "max-w-3xl")}>
        Lieve klanten, omdat wij persoonlijk contact met onze klanten heel
        belangrijk vinden, stellen wij ons graag aan u voor.
      </h1>
      <EmployeeGrid />
    </main>
  );
}
