import type { AddCardFormProps } from '../../../src/shared/types';
import '../../../src/shared/App.css';

export default function AddCardForm({ onAddCard }: AddCardFormProps) {
  // TODO: Add controlled input states for front, back, and category

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: Construct newCard object and invoke onAddCard
  };

  return (
    <form className="add-card-form" onSubmit={handleSubmit}>
      <h3>Add a New Study Card</h3>
      {/* TODO: Add input elements bound to state */}
      <button type="submit">Add Card</button>
    </form>
  );
}