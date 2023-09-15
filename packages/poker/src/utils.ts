import { CardType } from './types'
import {RANK_NAMES, RANK_VALUES, RANKS, SUIT_NAMES, SUIT_SHORT_NAMES} from "./constants";

/**
 * returns all permutations of a given array
 * @param arr
 * @param size
 */
export const permutations = <T>(arr: T[], size: number): T[][] => {
  return []
}

/**
 * example full house hand = [2, 2, 2, 3, 3]
 * @param hand - array of cards
 */
export const isFullHouse = (hand: CardType[]): boolean => {
  return false
}

/**
 * Flush example card array = [KD, JD, 4D, 5D, 7D]
 * @param hand - array of cards
 */
export const isFlush = (hand: CardType[]): boolean => {
  return false
}

/**
 * Straight example card array = [KD, QD, 10D, 9D, 8D]
 * @param hand
 */
export const isStraight = (hand: CardType[]): boolean => {
  return false
}

/**
 * Straight Flush example card array = [8D, 9D, 10D, JD, QD]
 * @param hand
 */
export const isStraightFlush = (hand: CardType[]): boolean => {
  return false
}

/**
 * example Royal Flush hand = [10D, JD, QD, KD, AD]
 * * The first card in the array must be a 10 value
 * @param hand
 */
export const isRoyalFlush = (hand: CardType[]): boolean => {
  return false
}

/**
 * example Four of a Kind hand = [2D, 2H, 2S, 2C, 3D]
 * @param hand
 */
export const isFourOfAKind = (hand: CardType[]): boolean => {
  return false
}

/**
 * example Three of a Kind hand = [2D, 2H, 2S, 3C, 4D]
 * @param hand
 */
export const isThreeOfAKind = (hand: CardType[]): boolean => {
  return false
}

/**
 * example Two Pair hand = [2D, 2H, 3S, 3C, 4D]
 * @param hand
 */
export const isTwoPair = (hand: CardType[]): boolean => {
  return false
}

/**
 * example One Pair hand = [2D, 2H, 3S, 4C, 5D]
 * @param hand
 */
export const isPair = (hand: CardType[]): boolean => {
  return false
}

/**
 * this function will find the highest rank of a hand and return the rank name
 * @param cards
 */
export const calculateHandRank = (
  cards: CardType[],
): {
  rank: string;
  rankValue: number;
} => {
  return {
    rank: null,
    rankValue: 0,
  }
}

/**
 * !!! DO NOT EDIT THIS FUNCTION !!!
 * transform short string to card object
 * @param shortCardName
 */
export const shortNameToCard = (shortCardName: string): CardType => {
  const rank = shortCardName.slice(0, -1).toUpperCase();
  const suit = shortCardName.slice(-1).toLowerCase();
  const rankIndex = RANKS.indexOf(rank);
  const suitIndex = SUIT_SHORT_NAMES.indexOf(suit);
  const rankValue = RANK_VALUES[rankIndex];
  const suitName = SUIT_NAMES[suitIndex];
  return {
    rank,
    rankName: RANK_NAMES[rankIndex],
    suit,
    suitName,
    suitOrder: suitIndex,
    rankValue
  };
};


/**
 * !!! DO NOT EDIT THIS FUNCTION !!!
 * transform card object to short string
 * @param card
 */
export const cardToShortName = (card: CardType): string => {
  return `${card.rank}${card.suit}`;
};


/**
 * input card array and return string combination short card names
 * @param cards
 */
export const makeReadableHandArray = (cards: CardType[]): string => {
  return cards
    .map((card) => cardToShortName(card))
    .join(' ')
}
