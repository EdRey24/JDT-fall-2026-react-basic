import { useState } from 'react';
import type { FlashcardProps } from '../../../src/shared/types';
import '../../../src/shared/App.css';

export default function Flashcard({ category, front, back, onDelete }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className="flashcard-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-side flashcard-front">
          <span className="category-tag">{category}</span>
          <p>{front}</p>
          {onDelete && (
            <button
              style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#ef4444' }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              Delete
            </button>
          )}
        </div>

        <div className="flashcard-side flashcard-back">
          <span className="category-tag">{category}</span>
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}