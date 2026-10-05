import Flashcard from './components/Flashcard';
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
  // TODO: Add useState for tracking currentIndex

  return (
    <div className="app-container">
      <div className="header">
        <h1>React Study Deck</h1>
        <p>Master React Concepts one card at a time!</p>
      </div>

      <Flashcard back={initialCards[0].back} category={initialCards[0].category} front={initialCards[0].front}/>

      {/* TODO: Add Previous / Next navigation controls */}
    </div>
  );
}