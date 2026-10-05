import type { FlashcardProps } from '../../../src/shared/types';
import '../../../src/shared/App.css';

// TODO: Import useState and add boolean flip state
export default function Flashcard({ category, front, back }: FlashcardProps) {
  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-side flashcard-front">
          <span className="category-tag">{category}</span>
          <p>{front}</p>
        </div>

        <div className="flashcard-side flashcard-back">
          <span className="category-tag">{category}</span>
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}