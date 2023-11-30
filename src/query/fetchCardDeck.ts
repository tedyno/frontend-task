import { CardDeckResponse } from '../interfaces/card';

export const fetchCardDeck = async (): Promise<CardDeckResponse> => {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};
