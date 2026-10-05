import { useState } from 'react';
import Flashcard from './components/Flashcard';
import AddCardForm from './components/AddCardForm';
import type { FlashcardData } from '../../src/shared/types';
import '../../src/shared/App.css';

const initialCards: FlashcardData[] = [
  {
    id: 1,
    category: 'React Basics',
    front: 'What is a React Component?',
    back: 'A reusable piece of UI that can manage its own state and props.'
  },
  {
    id: 2,
    category: 'React Hooks',
    front: 'What does useState do?',
    back: 'It lets you add React state to functional components.'
  },
  {
    id: 3,
    category: 'JSX',
    front: 'Why do we need a "key" prop in lists?',
    back: 'To help React identify which items have changed, are added, or are removed.'
  }
];

export default function App() {
  const [cards, setCards] = useState<FlashcardData[]>(initialCards);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = (): void => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAddCard = (newCard: FlashcardData): void => {
    setCards([...cards, newCard]);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="app-container">
      <div className="header">
        <h1>React Study Deck</h1>
        <p>Master React Concepts one card at a time!</p>
      </div>

      {cards.length > 0 && (
        <Flashcard back={currentCard.back} category={currentCard.category} front={currentCard.front} key={currentCard.id}/>
      )}

      <div className="controls">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>

        <span className="progress">
          {currentIndex + 1} / {cards.length}
        </span>

        <button onClick={handleNext} disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>

      <AddCardForm onAddCard={handleAddCard}/>
    </div>
  );
}