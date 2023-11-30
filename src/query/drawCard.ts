import { DrawCardResponse } from '../interfaces/card';

export const drawCard = async (deckId: string): Promise<DrawCardResponse> => {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  if (!response.ok) {
    throw new Error('Failed to draw a card');
  }
  return response.json();
};
