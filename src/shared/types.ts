export interface FlashcardData {
  id: number;
  category: string;
  front: string;
  back: string;
}

export interface FlashcardProps {
  category: string;
  front: string;
  back: string;
  onDelete?: () => void;
}

export interface AddCardFormProps {
  onAddCard: (newCard: FlashcardData) => void;
}