import React from 'react';
import { useAtom } from 'jotai';
import {
  allCardsDrawnAtom,
  cardDeckAtom,
  cardsRemainingAtom,
  drawnCardAtom,
  previousCardAtom,
  suitMatchesAtom,
  suitMatchesCountAtom,
  valueMatchesAtom,
  valueMatchesCountAtom,
} from '../store/store';
import { drawCard } from '../query/drawCard';
import { Button } from '../styled';

export const DrawCardButton: React.FC = () => {
  const [suitMatchesCount, setSuitMatchesCount] = useAtom(suitMatchesCountAtom);

  const [valueMatchesCount, setValueMatchesCount] = useAtom(valueMatchesCountAtom);

  const [valueMatches] = useAtom(valueMatchesAtom);
  const [suitMatches] = useAtom(suitMatchesAtom);
  const [allCardsDrawn] = useAtom(allCardsDrawnAtom);
  const [drawnCard, setDrawnCard] = useAtom(drawnCardAtom);
  const [, setPreviousCard] = useAtom(previousCardAtom);
  const [, setCardsRemaining] = useAtom(cardsRemainingAtom);
  const [deckData] = useAtom(cardDeckAtom);

  const onClickHandler = async () => {
    if (!allCardsDrawn) {
      const cardData = await drawCard(deckData.deck_id);
      setPreviousCard(drawnCard);
      setDrawnCard(cardData.cards[0]);
      if (valueMatches) {
        setValueMatchesCount(valueMatchesCount + 1);
      }
      if (suitMatches) {
        setSuitMatchesCount(suitMatchesCount + 1);
      }
      setCardsRemaining(cardData.remaining);
    }
  };

  return (
    <div>
      <Button disabled={allCardsDrawn} onClick={onClickHandler}>
        Draw a Card
      </Button>
    </div>
  );
};
