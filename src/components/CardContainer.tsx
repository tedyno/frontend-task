import React from 'react';
import { CardImage, CardImageContainer, CardPlaceholder } from '../styled';
import { Card } from '../interfaces/card';

export const CardContainer: React.FC<{ card: Card | null; label: string }> = ({ card, label }) => {
  return (
    <div>
      <h3>{label}</h3>
      <p>{card ? `${card.value} of ${card.suit}` : 'No card'}</p>
      <CardImageContainer>
        <CardPlaceholder>
          {card && <CardImage src={card.image} alt={`${card.value} of ${card.suit}`} />}
        </CardPlaceholder>
      </CardImageContainer>
    </div>
  );
};
