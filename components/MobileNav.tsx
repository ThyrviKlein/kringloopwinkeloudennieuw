import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import TLink from "./TLink";
import { Facebook, Instagram } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-4">
          <TLink href="/" variant="ghost" className="justify-start">
            Home
          </TLink>
          <TLink href="/about" variant="ghost" className="justify-start">
            Over Ons
          </TLink>
          <TLink
            href="/vintage-corner"
            variant="ghost"
            className="justify-start"
          >
            Vintage Corner
          </TLink>
          <div className="mt-4 flex items-center gap-4">
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
