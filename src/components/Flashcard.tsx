import { useState } from 'react';
import '../App.css';
import type { FlashcardProps } from '../shared/types';

export default function Flashcard({ category, front, back }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        
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