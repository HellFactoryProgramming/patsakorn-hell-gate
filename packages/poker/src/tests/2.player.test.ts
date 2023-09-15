import { Player } from "../player";
import { makeReadableHandArray, shortNameToCard } from "../utils";
import { EHandRank } from "../constants";

describe("Test Player Class", function () {
  it("should create a player", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("2h"), shortNameToCard("3h")],
      position: 1,
    });
    expect(player.name).toBe("John");

    const player2 = new Player({
      name: "Dendi",
      hand: [shortNameToCard("AS"), shortNameToCard("AC")],
      position: 2,
    });
    expect(player2.getHand()).toMatchObject([
      shortNameToCard("AS"),
      shortNameToCard("AC"),
    ]);
  });

  it("player can be fold", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("2h"), shortNameToCard("3h")],
      position: 1,
    });
    player.setFolded(true);
    expect(player.isFolded()).toBe(true);

    const player2 = new Player({
      name: "Dendi",
      hand: [shortNameToCard("AS"), shortNameToCard("AC")],
      position: 2,
    });
    expect(player2.getHand()).toMatchObject([
      shortNameToCard("AS"),
      shortNameToCard("AC"),
    ]);
    player2.setFolded(true);
    player2.setFolded(false); // can be unFolded
    expect(player.isFolded()).toBe(true);
  });

  // Bonus Test
  it("should be compare all possible Hands and Flop", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("9h"), shortNameToCard("10h")],
      position: 1,
    });
    player.setBoardCards([
      shortNameToCard("2s"),
      shortNameToCard("3s"),
      shortNameToCard("4s"),
      shortNameToCard("5s"),
      shortNameToCard("6s"),
    ]);
    const actual = player.allPossibleHands();
    const allPossibleHands = actual.map((c) => makeReadableHandArray(c));
    expect(allPossibleHands).toEqual([
      "2s 3s 4s 9h 10h",
      "2s 3s 5s 9h 10h",
      "2s 3s 6s 9h 10h",
      "2s 4s 5s 9h 10h",
      "2s 4s 6s 9h 10h",
      "2s 5s 6s 9h 10h",
      "3s 4s 5s 9h 10h",
      "3s 4s 6s 9h 10h",
      "3s 5s 6s 9h 10h",
      "4s 5s 6s 9h 10h",
      "2s 3s 4s 5s 9h",
      "2s 3s 4s 6s 9h",
      "2s 3s 5s 6s 9h",
      "2s 4s 5s 6s 9h",
      "3s 4s 5s 6s 9h",
      "2s 3s 4s 5s 10h",
      "2s 3s 4s 6s 10h",
      "2s 3s 5s 6s 10h",
      "2s 4s 5s 6s 10h",
      "3s 4s 5s 6s 10h",
      "2s 3s 4s 5s 6s",
    ]);
    expect(actual).not.toContainEqual(
      expect.arrayContaining([
        shortNameToCard("2s"),
        shortNameToCard("3s"),
        shortNameToCard("5s"),
        shortNameToCard("5c"),
        shortNameToCard("6s"),
      ])
    );
  });
  // Bonus Test
  it("should be find best compare findBestHandTexusHoldem", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("9h"), shortNameToCard("9c")],
      position: 1,
    });
    player.setBoardCards([
      shortNameToCard("AS"),
      shortNameToCard("3H"),
      shortNameToCard("7D"),
      shortNameToCard("5D"),
      shortNameToCard("9S"),
    ]);
    const actual = player.findBestHandTexusHoldem();
    expect(actual.handRankName).toEqual(EHandRank.ThreeOfAKind);
    expect(actual.handCards).toEqual([
      shortNameToCard("3h"),
      shortNameToCard("9h"),
      shortNameToCard("9c"),
      shortNameToCard("9s"),
      shortNameToCard("As"),
    ]);
  });
});
