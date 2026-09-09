"use client";

import { useCallback, useSyncExternalStore } from "react";

export type CardStatus = "new" | "learning" | "known";

export type DeckProgress = Record<string, CardStatus>;

const storageKey = (deckId: string) => `flashcards:${deckId}:progress`;

const EMPTY: DeckProgress = {};
const cache = new Map<string, DeckProgress>();
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function read(deckId: string): DeckProgress {
  const cached = cache.get(deckId);
  if (cached) return cached;
  try {
    const raw = window.localStorage.getItem(storageKey(deckId));
    const parsed = raw ? (JSON.parse(raw) as DeckProgress) : EMPTY;
    const value = parsed && typeof parsed === "object" ? parsed : EMPTY;
    cache.set(deckId, value);
    return value;
  } catch {
    cache.set(deckId, EMPTY);
    return EMPTY;
  }
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

export function useDeckProgress(deckId: string) {
  const progress = useSyncExternalStore(
    subscribe,
    () => read(deckId),
    () => EMPTY
  );

  const setProgress = useCallback(
    (next: DeckProgress) => {
      cache.set(deckId, next);
      window.localStorage.setItem(storageKey(deckId), JSON.stringify(next));
      emit();
    },
    [deckId]
  );

  return [progress, setProgress] as const;
}

export function statusOf(progress: DeckProgress, cardId: string): CardStatus {
  return progress[cardId] ?? "new";
}
