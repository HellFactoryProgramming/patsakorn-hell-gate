import { CardType } from "./types";
export class PokerDeck {
  private readonly deck: CardType[] = [];

  constructor(options?: { shuffle?: boolean }) {

  }

  private shuffleDeck(): CardType[] {
    return []
  }

  public createDeck(): CardType[] {
   return []
  }

  public dealCards(count: number): CardType[] {
    return []
  }

  public getDeck(): CardType[] {
    return this.deck;
  }
}
