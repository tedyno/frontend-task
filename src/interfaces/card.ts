export interface Card {
  code: string;
  image: string;
  images: {
    png: string;
    svg: string;
  };
  value: string;
  suit: string;
}

export interface DrawCardResponse {
  cards: Card[];
  deck_id: string;
  remaining: number;
  success: true;
}

export interface CardDeckResponse {
  deck_id: string;
  remaining: number;
  success: true;
  shuffled: boolean;
}
