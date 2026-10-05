import type { FlashcardProps } from '../../../src/shared/types';
import '../../../src/shared/App.css';

export default function Flashcard(props: FlashcardProps) {
  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-side flashcard-front">
          {/* TODO: Render category tag and front text dynamically */}
          <p>Flashcard Front Placeholder</p>
        </div>
      </div>
    </div>
  );
}