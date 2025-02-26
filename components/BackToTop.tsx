"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 400px
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed left-1/2 top-20 z-50 -translate-x-1/2",
        "transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
      )}
    >
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "bg-background/80 backdrop-blur",
          "shadow-lg shadow-brand-teal/20",
          "hover:shadow-brand-teal/30",
        )}
        onClick={scrollToTop}
        aria-label="Scroll naar boven"
      >
        <ArrowUp className="h-4 w-4" />
        <span className="sr-only">Scroll naar boven</span>
      </Button>
    </div>
  );
}
