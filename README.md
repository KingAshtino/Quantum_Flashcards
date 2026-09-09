# Quantum CH 1 Terms

**Open the flashcards (no install):**  
https://kingashtino.github.io/Quantum_Flashcards/

That is the study site. The GitHub repo page is only the source code; it will not run the cards in the browser.

Source: https://github.com/KingAshtino/Quantum_Flashcards

Cards flip, shuffle, and remember “knew it / still learning” marks in this browser. Equations render with KaTeX.

## Run locally (optional)

Only needed if you want to edit the code on your computer:

```bash
npm install
npm run dev
```

Then open [http://localhost:43141](http://localhost:43141).

`npm run dev` uses webpack. `npm run build && npm start` is the production server.

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
