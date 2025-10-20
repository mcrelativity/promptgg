"use client";

import { useState, useEffect } from "react";

interface UsePremiumReturn {
  isPremium: boolean;
  dailyLimit: number;
  usedToday: number;
  remainingToday: number;
  canGenerate: boolean;
  incrementUsage: () => void;
  resetDailyLimit: () => void;
  activatePremium: (licenseKey: string) => void;
}

const DAILY_LIMIT = 10;
const STORAGE_KEY = "promptgg_usage";
const LICENSE_KEY = "promptgg_license";

export function usePremium(): UsePremiumReturn {
  const [isPremium, setIsPremium] = useState(false);
  const [usedToday, setUsedToday] = useState(0);

  useEffect(() => {
    // Verificar si hay licencia premium
    const license = localStorage.getItem(LICENSE_KEY);
    if (license) {
      setIsPremium(true);
    }

    // Cargar uso diario
    const storedUsage = localStorage.getItem(STORAGE_KEY);
    if (storedUsage) {
      const usage = JSON.parse(storedUsage);
      const today = new Date().toDateString();

      if (usage.date === today) {
        setUsedToday(usage.count);
      } else {
        // Nuevo día, resetear contador
        setUsedToday(0);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ date: today, count: 0 })
        );
      }
    }
  }, []);

  const incrementUsage = () => {
    if (isPremium) return; // Premium = ilimitado

    const newCount = usedToday + 1;
    const today = new Date().toDateString();

    setUsedToday(newCount);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: newCount })
    );
  };

  const resetDailyLimit = () => {
    setUsedToday(0);
    const today = new Date().toDateString();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: 0 })
    );
  };

  const activatePremium = (licenseKey: string) => {
    localStorage.setItem(LICENSE_KEY, licenseKey);
    setIsPremium(true);
  };

  const remainingToday = isPremium ? Infinity : Math.max(0, DAILY_LIMIT - usedToday);
  const canGenerate = isPremium || usedToday < DAILY_LIMIT;

  return {
    isPremium,
    dailyLimit: DAILY_LIMIT,
    usedToday,
    remainingToday,
    canGenerate,
    incrementUsage,
    resetDailyLimit,
    activatePremium,
  };
}
