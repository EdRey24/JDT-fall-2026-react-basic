import { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import AddCardForm from '../../session-3/solution/components/AddCardForm';
import type { FlashcardData } from '../../src/shared/types';
import '../../src/shared/App.css';

const initialCards: FlashcardData[] = [
  { id: 1, category: 'React Basics', front: 'What is a React Component?', back: 'A reusable piece of UI.' }
];

export default function App() {
  const [cards, setCards] = useState<FlashcardData[]>(() => {
    const saved = localStorage.getItem('study_deck_cards');
    return saved ? JSON.parse(saved) : initialCards;
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('study_deck_cards', JSON.stringify(cards));
  }, [cards]);

  const handleDeleteCard = (): void => {
    if (cards.length === 0) return;
    const cardToDeleteId = cards[currentIndex].id;
    const updatedCards = cards.filter((c) => c.id !== cardToDeleteId);
    setCards(updatedCards);

    if (currentIndex >= updatedCards.length && updatedCards.length > 0) {
      setCurrentIndex(updatedCards.length - 1);
    }
  };

  const exportJSON = (): void => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cards, null, 2));
    const anchor = document.createElement('a');
    anchor.setAttribute('href', dataStr);
    anchor.setAttribute('download', 'flashcards.json');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const importJSON = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsed)) {
            setCards(parsed);
            setCurrentIndex(0);
          }
        } catch {
          alert('Invalid JSON File Format');
        }
      };
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="app-container">
      <div className="header">
        <h1>React Study Deck (Bonus Version)</h1>
      </div>

      {cards.length > 0 ? (
        <Flashcard back={currentCard.back} category={currentCard.category} front={currentCard.front} key={currentCard.id} onDelete={handleDeleteCard}/>
      ) : (
        <p>No cards left! Add one below.</p>
      )}

      {cards.length > 0 && (
        <div className="controls">
          <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}>
            Previous
          </button>
          <span className="progress">{currentIndex + 1} / {cards.length}</span>
          <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === cards.length - 1}>
            Next
          </button>
        </div>
      )}

      <div className="controls" style={{ gap: '12px', justifyContent: 'center' }}>
        <button onClick={exportJSON}>Export JSON</button>
        <label className="button" style={{ background: '#10b981', padding: '10px 24px', color: 'white', borderRadius: '8px', cursor: 'pointer' }}>
          Import JSON
          <input type="file" accept=".json" onChange={importJSON} style={{ display: 'none' }} />
        </label>
      </div>

      <AddCardForm onAddCard={(card) => setCards([...cards, card])} />
    </div>
  );
}