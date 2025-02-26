import { MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-background/95 shadow-md shadow-brand-teal/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          Webdesign en ontwikkeling door{" "}
          <span className="font-bold text-brand-teal transition-colors hover:text-brand-teal/90">
            Thyrvi Klein
          </span>
        </p>
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:gap-6 sm:text-left">
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">
            <MapPin className="h-4 w-4 text-brand-teal" aria-hidden="true" />
            <span>Prins Bernhardstraat 43B, 2411 KT Bodegraven</span>
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">
            <PhoneCall className="h-4 w-4 text-brand-teal" aria-hidden="true" />
            <span>06 20470571</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
