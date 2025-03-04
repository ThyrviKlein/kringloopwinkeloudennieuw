"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import TLink from "./TLink";

interface Promotion {
  id: string;
  message: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  link?: {
    href: string;
    text: string;
  };
}

const promotions: Promotion[] = [];

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePromotion, setActivePromotion] = useState<Promotion | null>(
    null,
  );

  useEffect(() => {
    // Check if banner was dismissed
    const dismissedPromotions = JSON.parse(
      localStorage.getItem("dismissedPromotions") || "[]",
    );

    const now = new Date();
    const activePromo = promotions.find((promo) => {
      const start = new Date(promo.startDate);
      const end = new Date(promo.endDate);
      return (
        now >= start && now <= end && !dismissedPromotions.includes(promo.id)
      );
    });

    setActivePromotion(activePromo || null);
    setIsVisible(!!activePromo);
  }, []);

  if (!isVisible || !activePromotion) return null;

  const dismissBanner = () => {
    const dismissedPromotions = JSON.parse(
      localStorage.getItem("dismissedPromotions") || "[]",
    );
    localStorage.setItem(
      "dismissedPromotions",
      JSON.stringify([...dismissedPromotions, activePromotion.id]),
    );
    setIsVisible(false);
  };

  return (
    <div className="relative bg-brand-teal">
      <div className="container mx-auto px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="px-4 font-bold">{activePromotion.message}</p>
            {activePromotion.link && (
              <TLink
                href={activePromotion.link.href}
                variant="link"
                className="font-semibold text-white hover:text-white/90"
              >
                {activePromotion.link.text}
              </TLink>
            )}
          </div>
          <button
            onClick={dismissBanner}
            className="rounded-full p-1 hover:bg-white/10"
            aria-label="Sluit promotie"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
