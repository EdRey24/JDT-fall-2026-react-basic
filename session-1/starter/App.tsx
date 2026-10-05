import Flashcard from './components/Flashcard';
import type { FlashcardData } from '../../src/shared/types';
import '../../src/shared/App.css';

const sampleCard: FlashcardData = {
  id: 1,
  category: 'React Basics',
  front: 'What is a React Component?',
  back: 'A reusable piece of UI that can manage its own state and props.'
};

export default function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>React Study Deck</h1>
        <p>Master React Concepts one card at a time!</p>
      </div>

      {/* TODO: Pass properties from sampleCard down as props */}
      <Flashcard back="Sample Back" category="Sample Category" front="Sample Front"/>
    </div>
  );
}