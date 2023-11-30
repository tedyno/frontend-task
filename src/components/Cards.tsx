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
import { Column, Heading2, Row } from '../styled';
import { DrawCardButton } from './DrawCardButton';
import { CardContainer } from './CardContainer';

export const Cards = () => {
  const [valueMatchesCount] = useAtom(valueMatchesCountAtom);
  const [valueMatches] = useAtom(valueMatchesAtom);
  const [suitMatchesCount] = useAtom(suitMatchesCountAtom);
  const [suitMatches] = useAtom(suitMatchesAtom);
  const [allCardsDrawn] = useAtom(allCardsDrawnAtom);
  const [deckData] = useAtom(cardDeckAtom);
  const [cardsRemaining] = useAtom(cardsRemainingAtom);
  const [previousCard] = useAtom(previousCardAtom);
  const [drawnCard] = useAtom(drawnCardAtom);

  return (
    <Column>
      <h1>SNAP!</h1>
      <p>Shuffled Deck ID: {deckData.deck_id}</p>
      <p>Remaining cards: {cardsRemaining}</p>
      {allCardsDrawn ? (
        <Column>
          <p>All cards drawn!</p>
          <p>Total value matches: {valueMatchesCount}</p>
          <p>Total suit matches: {suitMatchesCount}</p>
        </Column>
      ) : (
        <Column>
          <Row>
            <Heading2>{valueMatches && 'SNAP VALUE!'}</Heading2>
            <Heading2>{suitMatches && 'SNAP SUIT!'}</Heading2>
          </Row>
          <Row>
            <CardContainer card={previousCard} label="Previous card" />
            <CardContainer card={drawnCard} label="Drawn card" />
          </Row>
          <Row>
            <DrawCardButton />
          </Row>
        </Column>
      )}
    </Column>
  );
};
