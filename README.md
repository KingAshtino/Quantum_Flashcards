# Quantum CH 1 Terms

A small study site of digital flashcards for **Quantum CH 1 Terms** — the math review that usually opens a first course in quantum mechanics (complex numbers, Hilbert spaces, Dirac notation, operators, and the first measurement postulates).

Cards flip, shuffle, and remember “knew it / still learning” marks in this browser. Equations render with KaTeX.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43141](http://localhost:43141).

Production build:

```bash
npm run build
npm start
```

## How to study

- **Study all** shuffles the full deck.
- **Study unfamiliar only** skips cards you marked as known.
- **Study by topic** drills one category at a time.
- **Browse terms** lists every definition without flipping.

While a card is open:

| Key | Action |
| --- | --- |
| Space / Enter | Flip |
| ← / → or `k` / `j` | Previous / next |
| `1` | Still learning |
| `2` | Knew it |

## Edit the deck

Cards live in `src/data/decks.ts`. Wrap math in `$...$` (inline) or `$$...$$` (display). The site is built so you can add another named deck later without changing the study UI.

## Notes

The original `QM_Math_Review_Flashcards.pdf` was a local file path and was not available in this environment, so this deck is a complete Chapter 1 math-review term set rather than a page-by-page transcription. If you drop the PDF into the repo, the cards can be aligned to that exact wording.
