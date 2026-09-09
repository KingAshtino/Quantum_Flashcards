import { FlashcardApp } from "@/components/flashcard-app";
import { quantumCh1Terms } from "@/data/decks";

export default function Home() {
  return <FlashcardApp deck={quantumCh1Terms} />;
}
