import { BestTexasHoldemHand, CardType, PlayerInterface } from "./types";
import {
  calculateHandRank,
  makeReadableHandArray,
  permutations,
} from "./utils";

export class Player {
  public name: string;

  private handCards: CardType[];

  public boardCards: CardType[] = [];

  public position: number;

  constructor(player: PlayerInterface) {
    this.name = player.name || `Player ${player.position}`;
    this.handCards = player.hand;
    this.position = player.position;
    return this;
  }

  public setBoardCards(cards: CardType[]): this {
    return this;
  }

  public getBoardCards(): CardType[] {
    return this.boardCards;
  }

  public addCardToHand(card: CardType[]): void {}

  public getHand(): CardType[] {
    return this.handCards;
  }

  public gameReset(): void {
    this.handCards = [];
    this.boardCards = [];
  }

  public sumCardRankValue(cards: CardType[]): number {
    return 0;
  }

  public allPossibleHands(): CardType[][] {
    return [];
  }

  public findBestHandTexusHoldem(): BestTexasHoldemHand {
    return {
      handRankValue: 0,
      handRankName: "",
      handCards: [],
      handCardSuits: [],
      handCardsRankValue: this.sumCardRankValue([]),
      display: makeReadableHandArray([]),
    };
  }

  public setFolded(){}

  public isFolded(){
  }
}
