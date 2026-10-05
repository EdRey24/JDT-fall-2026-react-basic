import { useState } from 'react';
import type { FlashcardData, AddCardFormProps } from '../../../src/shared/types';
import '../../../src/shared/App.css';

export default function AddCardForm({ onAddCard }: AddCardFormProps) {
  const [front, setFront] = useState<string>('');
  const [back, setBack] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!front.trim() || !back.trim() || !category.trim()) {
      alert('Please fill out all fields before adding a card.');
      return;
    }

    const newCard: FlashcardData = {
      id: Date.now(),
      category,
      front,
      back
    };

    onAddCard(newCard);

    setFront('');
    setBack('');
    setCategory('');
  };

  return (
    <form className="add-card-form" onSubmit={handleSubmit}>
      <h3>Add a New Study Card</h3>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          placeholder="e.g. React Basics"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="front">Front (Question)</label>
        <input
          id="front"
          type="text"
          placeholder="e.g. What is JSX?"
          value={front}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFront(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="back">Back (Answer)</label>
        <input
          id="back"
          type="text"
          placeholder="e.g. A syntax extension for JavaScript."
          value={back}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBack(e.target.value)}
        />
      </div>

      <button type="submit">Add Card</button>
    </form>
  );
}