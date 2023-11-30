import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { fetchCardDeck } from '../query/fetchCardDeck';
import { Card } from '../interfaces/card';

export const drawnCardAtom = atom<Card | null>(null);
export const previousCardAtom = atom<Card | null>(null);
export const valueMatchesCountAtom = atom<number>(0);

export const valueMatchesAtom = atom<boolean>((get): boolean => {
  const drawnCard = get(drawnCardAtom);
  const previousCard = get(previousCardAtom);

  if (!drawnCard || !previousCard) {
    return false;
  }

  return drawnCard.value === previousCard.value;
});
export const suitMatchesCountAtom = atom<number>(0);

export const suitMatchesAtom = atom<boolean>((get): boolean => {
  const drawnCard = get(drawnCardAtom);
  const previousCard = get(previousCardAtom);

  if (!drawnCard || !previousCard) {
    return false;
  }

  return drawnCard.suit === previousCard.suit;
});

export const cardsRemainingAtom = atom<number>(52);

export const allCardsDrawnAtom = atom<boolean>(get => {
  return get(cardsRemainingAtom) < 1;
});

export const [cardDeckAtom] = atomsWithQuery(() => ({
  queryKey: ['cardDeck'],
  queryFn: fetchCardDeck,
}));
