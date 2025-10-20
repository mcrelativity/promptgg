"use client";

import { useEffect } from "react";
import { usePremium } from "@/hooks/usePremium";

interface AdSenseSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  className?: string;
}

export default function AdSenseSlot({ 
  slot, 
  format = "auto",
  className = "" 
}: AdSenseSlotProps) {
  const { isPremium } = usePremium();

  useEffect(() => {
    if (isPremium) return; // No mostrar ads a usuarios premium

    try {
      // @ts-expect-error - AdSense global
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [isPremium]);

  // No mostrar nada si es premium
  if (isPremium) return null;

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3949583827065267"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
