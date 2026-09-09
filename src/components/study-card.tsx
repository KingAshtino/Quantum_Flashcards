"use client";

import { MathText } from "@/lib/math-text";
import { cn } from "@/lib/utils";

export function StudyCard({
  term,
  definition,
  extra,
  flipped,
  onFlip,
}: {
  term: string;
  definition: string;
  extra?: string;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onFlip}
      aria-pressed={flipped}
      className="group relative block h-[min(28rem,62vh)] w-full cursor-pointer rounded-2xl text-left outline-none [perspective:1400px] focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="sr-only">
        {flipped ? "Showing definition. Click to show term." : "Showing term. Click to show definition."}
      </span>
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xl backface-hidden sm:p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Term
          </p>
          <div className="flex flex-1 items-center justify-center px-2">
            <h2 className="text-center font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {term}
            </h2>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Tap the card or press Space to flip
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col gap-4 overflow-y-auto rounded-2xl border border-border/80 bg-card p-6 shadow-xl [transform:rotateY(180deg)] backface-hidden sm:p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Definition
          </p>
          <div className="flex flex-1 flex-col justify-center gap-4">
            <p className="text-lg leading-relaxed text-pretty sm:text-xl">
              <MathText text={definition} />
            </p>
            {extra ? (
              <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                <MathText text={extra} />
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  );
}
