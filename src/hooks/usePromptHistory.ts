"use client";

import { useState, useEffect } from "react";

export interface SavedPrompt {
  id: string;
  model: string;
  task: string;
  tone: string;
  context?: string;
  constraints?: string;
  generatedPrompt: string;
  timestamp: number;
}

const STORAGE_KEY = "promptgg_history";
const MAX_HISTORY = 50; // Máximo de prompts guardados

export function usePromptHistory() {
  const [history, setHistory] = useState<SavedPrompt[]>([]);

  // Cargar historial al montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setHistory(parsed);
        } catch (e) {
          console.error("Error parsing history:", e);
          setHistory([]);
        }
      }
    }
  }, []);

  // Guardar un prompt
  const savePrompt = (prompt: Omit<SavedPrompt, "id" | "timestamp">) => {
    const newPrompt: SavedPrompt = {
      ...prompt,
      id: Date.now().toString(),
      timestamp: Date.now(),
    };

    const newHistory = [newPrompt, ...history].slice(0, MAX_HISTORY);
    setHistory(newHistory);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    }
  };

  // Eliminar un prompt
  const deletePrompt = (id: string) => {
    const newHistory = history.filter((p) => p.id !== id);
    setHistory(newHistory);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    }
  };

  // Limpiar todo el historial
  const clearHistory = () => {
    setHistory([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return {
    history,
    savePrompt,
    deletePrompt,
    clearHistory,
  };
}
