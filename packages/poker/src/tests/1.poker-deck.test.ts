import { PokerDeck } from "../poker-deck";
import { CARDS_COUNT } from "../constants";
import { shortNameToCard } from "../utils";

describe("PokerDeck function test", function() {
  test("create deck", () => {
    const pokerDeck = new PokerDeck();
    expect(pokerDeck.getDeck()).toHaveLength(CARDS_COUNT);
  });

  test("sample check card in deck", () => {
    const pokerDeck = new PokerDeck();
    const deck = pokerDeck.getDeck();
    expect(deck).toEqual(
      expect.arrayContaining([
        expect.objectContaining(shortNameToCard("2C")),
        expect.objectContaining(shortNameToCard("4C"))
      ])
    );
  });

  test("shuffle deck will not equal sorted deck", () => {
    const deck1 = new PokerDeck();
    const deck2 = new PokerDeck({ shuffle: true });
    const defaultDeck = deck1.getDeck();
    const shuffledDeck = deck2.getDeck();
    expect(defaultDeck).not.toEqual(shuffledDeck);
    expect(defaultDeck.length).toEqual(shuffledDeck.length);
  });

  test("deal out 5 cards", () => {
    const deck = new PokerDeck({ shuffle: true });
    const totalDealtCards = 6;
    const myDeck = deck.getDeck();
    const playerCards = deck.dealCards(totalDealtCards);
    expect(playerCards).toHaveLength(totalDealtCards);
    expect(myDeck).toHaveLength(CARDS_COUNT - totalDealtCards);

    const dealerCards = deck.dealCards(3);
    expect(dealerCards).toHaveLength(3);
    expect(myDeck).toHaveLength(CARDS_COUNT - totalDealtCards - 3);
  });
});
