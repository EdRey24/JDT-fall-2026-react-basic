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
  }
];

export default function App() {
  // TODO: Turn initialCards into array state
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleAddCard = (newCard: FlashcardData): void => {
    // TODO: Append newCard using immutable array spread syntax
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>React Study Deck</h1>
        <p>Master React Concepts one card at a time!</p>
      </div>

      <Flashcard back={initialCards[0].back} category={initialCards[0].category} front={initialCards[0].front}/>

      <AddCardForm onAddCard={handleAddCard}/>
    </div>
  );
}