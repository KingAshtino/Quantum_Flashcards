"use client";

import { StudyCard } from "@/components/study-card";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CardCategory, Deck, Flashcard } from "@/data/decks";
import { MathText } from "@/lib/math-text";
import {
  statusOf,
  useDeckProgress,
  type CardStatus,
} from "@/lib/progress";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Layers,
  RotateCcw,
  Shuffle,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState, type ButtonHTMLAttributes, type ReactNode } from "react";

type View = "home" | "study" | "browse";
type Filter = "all" | "unfamiliar" | CardCategory;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function statusLabel(status: CardStatus) {
  if (status === "known") return "Known";
  if (status === "learning") return "Learning";
  return "New";
}

export function FlashcardApp({ deck }: { deck: Deck }) {
  const [view, setView] = useState<View>("home");
  const [progress, setProgress] = useDeckProgress(deck.id);
  const [filter, setFilter] = useState<Filter>("all");
  const [order, setOrder] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [browseCategory, setBrowseCategory] = useState<CardCategory | "all">(
    "all"
  );

  const updateProgress = useCallback(
    (next: Record<string, CardStatus>) => {
      setProgress(next);
    },
    [setProgress]
  );

  const counts = useMemo(() => {
    let known = 0;
    let learning = 0;
    let fresh = 0;
    for (const card of deck.cards) {
      const status = statusOf(progress, card.id);
      if (status === "known") known += 1;
      else if (status === "learning") learning += 1;
      else fresh += 1;
    }
    return { known, learning, fresh, total: deck.cards.length };
  }, [deck.cards, progress]);

  const categories = useMemo(() => {
    return [...new Set(deck.cards.map((c) => c.category))];
  }, [deck.cards]);

  const byId = useMemo(() => {
    return new Map(deck.cards.map((card) => [card.id, card]));
  }, [deck.cards]);

  const queue = useMemo(() => {
    return order
      .map((id) => byId.get(id))
      .filter((card): card is Flashcard => Boolean(card));
  }, [byId, order]);

  const current = queue[index];

  const startStudy = (nextFilter: Filter, reshuffle = true) => {
    const pool = deck.cards.filter((card) => {
      if (nextFilter === "unfamiliar") {
        return statusOf(progress, card.id) !== "known";
      }
      if (nextFilter === "all") return true;
      return card.category === nextFilter;
    });
    const ids = (reshuffle ? shuffle(pool) : pool).map((c) => c.id);
    if (ids.length === 0) return;
    setFilter(nextFilter);
    setOrder(ids);
    setIndex(0);
    setFlipped(false);
    setView("study");
  };

  const go = useCallback((delta: number) => {
    if (queue.length === 0) return;
    setIndex((i) => (i + delta + queue.length) % queue.length);
    setFlipped(false);
  }, [queue.length]);

  const mark = useCallback(
    (status: CardStatus) => {
      if (!current) return;
      updateProgress({ ...progress, [current.id]: status });
      setIndex((i) => (i < queue.length - 1 ? i + 1 : i));
      setFlipped(false);
    },
    [current, progress, queue.length, updateProgress]
  );

  useEffect(() => {
    if (view !== "study") return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        setFlipped((f) => !f);
      } else if (event.key === "ArrowRight" || event.key === "j") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft" || event.key === "k") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "1") {
        mark("learning");
      } else if (event.key === "2") {
        mark("known");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, go, mark]);

  const resetProgress = () => {
    updateProgress({});
  };

  if (view === "study" && current) {
    const status = statusOf(progress, current.id);
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-5 px-4 py-6 sm:py-10">
        <div className="flex items-center justify-between gap-3">
          <ActionButton variant="ghost" size="sm" onClick={() => setView("home")}>
            <ArrowLeft />
            Deck
          </ActionButton>
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {deck.title}
            </p>
            <p className="text-sm tabular-nums text-foreground">
              {index + 1} / {queue.length}
            </p>
          </div>
          <ActionButton
            variant="ghost"
            size="sm"
            onClick={() => startStudy(filter, true)}
          >
            <Shuffle />
            Shuffle
          </ActionButton>
        </div>

        <ProgressBar value={(counts.known / counts.total) * 100} />

        <div className="flex flex-wrap items-center gap-2">
          <span className={badgeVariants({ variant: "secondary" })}>
            {current.category}
          </span>
          <span
            className={cn(
              badgeVariants({
                variant: status === "known" ? "default" : "outline",
              }),
              "capitalize"
            )}
          >
            {statusLabel(status)}
          </span>
        </div>

        <StudyCard
          term={current.term}
          definition={current.definition}
          extra={current.extra}
          flipped={flipped}
          onFlip={() => setFlipped((f) => !f)}
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <ActionButton variant="outline" size="lg" onClick={() => go(-1)}>
            <ArrowLeft />
            Back
          </ActionButton>
          <ActionButton
            variant="destructive"
            size="lg"
            onClick={() => mark("learning")}
          >
            <X />
            Still learning
          </ActionButton>
          <ActionButton size="lg" onClick={() => mark("known")}>
            <Check />
            Knew it
          </ActionButton>
          <ActionButton variant="outline" size="lg" onClick={() => go(1)}>
            Next
            <ArrowRight />
          </ActionButton>
        </div>
        <p className="hidden text-center text-xs text-muted-foreground sm:block">
          Space flip · ← → navigate · 1 still learning · 2 knew it
        </p>
      </div>
    );
  }

  if (view === "browse") {
    const cards =
      browseCategory === "all"
        ? deck.cards
        : deck.cards.filter((c) => c.category === browseCategory);
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-6 sm:py-10">
        <div className="flex items-center justify-between">
          <ActionButton variant="ghost" size="sm" onClick={() => setView("home")}>
            <ArrowLeft />
            Deck
          </ActionButton>
        </div>
        <div>
          <h1 className="font-heading text-3xl tracking-tight">{deck.title}</h1>
          <p className="mt-1 text-muted-foreground">
            All {deck.cards.length} terms, grouped for review.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={browseCategory === "all"}
            onClick={() => setBrowseCategory("all")}
          >
            All
          </FilterChip>
          {categories.map((category) => (
            <FilterChip
              key={category}
              active={browseCategory === category}
              onClick={() => setBrowseCategory(category)}
            >
              {category}
            </FilterChip>
          ))}
        </div>
        <ul className="space-y-3">
          {cards.map((card) => (
            <li key={card.id}>
              <Card>
                <CardHeader className="border-b">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg">{card.term}</CardTitle>
                    <span className={badgeVariants({ variant: "secondary" })}>
                      {card.category}
                    </span>
                  </div>
                  <CardDescription>
                    {statusLabel(statusOf(progress, card.id))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 leading-relaxed">
                  <MathText text={card.definition} />
                  {card.extra ? (
                    <p className="mt-3 text-sm text-muted-foreground">
                      <MathText text={card.extra} />
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-8 sm:py-14">
      <header className="space-y-3">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Study deck
        </p>
        <h1 className="font-heading text-4xl tracking-tight text-balance sm:text-5xl">
          {deck.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
          {deck.subtitle}
        </p>
      </header>

      <Card>
        <CardHeader className="border-b">
          <CardTitle>Progress</CardTitle>
          <CardDescription>
            Marks are stored in this browser so you can pick up later.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <ProgressBar value={(counts.known / counts.total) * 100} />
          <div className="grid grid-cols-3 gap-3 text-center">
            <Stat label="New" value={counts.fresh} />
            <Stat label="Learning" value={counts.learning} />
            <Stat label="Known" value={counts.known} />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        <ActionButton
          size="lg"
          className="h-12"
          onClick={() => startStudy("all")}
        >
          <BookOpen />
          Study all {deck.cards.length} cards
        </ActionButton>
        <ActionButton
          size="lg"
          variant="secondary"
          className="h-12"
          disabled={counts.known === counts.total}
          onClick={() => startStudy("unfamiliar")}
        >
          <Layers />
          Study unfamiliar only
        </ActionButton>
        <ActionButton
          size="lg"
          variant="outline"
          className="h-12"
          onClick={() => setView("browse")}
        >
          Browse terms
        </ActionButton>
        <ActionButton
          size="lg"
          variant="ghost"
          className="h-12"
          onClick={resetProgress}
        >
          <RotateCcw />
          Reset marks
        </ActionButton>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
          Study by topic
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((category) => {
            const n = deck.cards.filter((c) => c.category === category).length;
            return (
              <button
                key={category}
                type="button"
                onClick={() => startStudy(category)}
                className="rounded-xl border border-border bg-card px-4 py-4 text-left transition-colors hover:bg-muted/50"
              >
                <p className="font-medium">{category}</p>
                <p className="text-sm text-muted-foreground">{n} cards</p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <p className="text-2xl font-medium tabular-nums">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-card text-foreground hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}

function ActionButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
}) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function ProgressBar({ value }: { value: number }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
      className="h-1 w-full overflow-hidden rounded-full bg-muted"
    >
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
