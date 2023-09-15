export type CardType = {
  rank: string;
  suit: string;
  suitName: string;
  suitOrder: number;
  suitSymbol?: string;
  rankName: string;
  rankValue: number;
}

export interface PlayerInterface {
  hand: CardType[];
  name?: string;
  position: number;
}

export interface BestTexasHoldemHand {
  handRankValue: number;
  handRankName: string;
  handCards: CardType[];
  handCardsRankValue: number;
  handCardSuits: string[];
  display: string;
}
