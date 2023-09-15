export const CARDS_COUNT = 52;
export const SUITS_SYMBOLS = ["♠", "♥", "♦", "♣"];
export const SUIT_NAMES = ["spades", "hearts", "diamonds", "clubs"];
export const SUIT_SHORT_NAMES = ["s", "h", "d", "c"];
export const RANKS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
export const RANK_NAMES = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];
export const RANK_VALUES = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export enum EHandRank {
  HighCard = "High Card",
  Pair = "Pair",
  TwoPair = "Two Pair",
  ThreeOfAKind = "Three of a Kind",
  Straight = "Straight",
  Flush = "Flush",
  FullHouse = "Full House",
  FourOfAKind = "Four of a Kind",
  StraightFlush = "Straight Flush",
  RoyalFlush = "Royal Flush",
}

export const HANK_RANKS = Object.values(EHandRank);
