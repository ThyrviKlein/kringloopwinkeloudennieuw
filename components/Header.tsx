import TLink from "@/components/TLink";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "bg-background/95 shadow-md shadow-brand-teal/20",
        "backdrop-blur supports-[backdrop-filter]:bg-background/60",
      )}
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <TLink href="/" variant="link" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              priority
              className="h-8 w-8 sm:h-[50px] sm:w-[50px]"
            />
            <p
              className={cn(
                "bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text",
                "text-base font-bold text-transparent sm:text-lg md:text-xl lg:text-2xl",
              )}
            >
              Kringloopwinkel Oud & Nieuw
            </p>
          </TLink>

          {/* Mobile Navigation */}
          <MobileNav />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 lg:flex">
            <TLink href="/" variant="link" className="text-md">
              Home
            </TLink>
            <TLink href="/about" variant="link" className="text-md">
              Over Ons
            </TLink>
            <TLink href="/vintage-corner" variant="link" className="text-md">
              My Vintage Corner
            </TLink>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <TLink
                  href="https://www.facebook.com/groups/2261838324021673/"
                  target="_blank"
                  icon={Facebook}
                  size="icon"
                  variant="ghost"
                />
                <TLink
                  href="https://www.instagram.com/oud_en_nieuw_bodegraven/"
                  target="_blank"
                  icon={Instagram}
                  size="icon"
                  variant="ghost"
                />
              </div>
              <div className="h-6 w-[1px] bg-border" />
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
