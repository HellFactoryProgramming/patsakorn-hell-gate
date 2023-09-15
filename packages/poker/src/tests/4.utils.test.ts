import { calculateHandRank, shortNameToCard, cardToShortName, permutations } from "../utils";

describe("Test Utils", function() {
  test("permutations with zero size", function() {
    const actual = permutations([], 0);
    expect(actual).toEqual([]);
  });
  test("permutations with size 3", () => {
    const actual = permutations<number>([1, 2, 3, 4, 5], 3);
    const expected = [
      [1, 2, 3],
      [1, 2, 4],
      [1, 2, 5],
      [1, 3, 4],
      [1, 3, 5],
      [1, 4, 5],
      [2, 3, 4],
      [2, 3, 5],
      [2, 4, 5],
      [3, 4, 5]
    ];
    expect(actual).toEqual(expected);
  });
  test("permutations with size 2", () => {
    const actual = permutations<number>([1, 2, 3, 4, 5], 2);
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 4],
      [3, 5],
      [4, 5]
    ];
    expect(actual).toEqual(expected);
  });
  test("correct transform short name to card", () => {
    expect(shortNameToCard("9C")).toMatchObject({
      suit: "c",
      rank: "9",
      rankName: "nine",
      rankValue: 9,
      suitOrder: 3,
      suitName: "clubs"
    });
    expect(shortNameToCard("KC")).toMatchObject({
      suit: "c",
      rank: "K",
      rankName: "king",
      rankValue: 13,
      suitOrder: 3,
      suitName: "clubs"
    });
    expect(shortNameToCard("KS")).toMatchObject({
      suit: "s",
      rank: "K",
      rankName: "king",
      rankValue: 13,
      suitOrder: 0,
      suitName: "spades"
    });
  });

  test("correct transform card to short name", () => {
    expect(cardToShortName(shortNameToCard("9C"))).toBe("9c");
    expect(cardToShortName(shortNameToCard("KC"))).toBe("Kc");
    expect(cardToShortName(shortNameToCard("KS"))).toBe("Ks");
  });

  test("It should be Royal Flush", () => {
    const actual = calculateHandRank([
      shortNameToCard("AC"),
      shortNameToCard("KC"),
      shortNameToCard("QC"),
      shortNameToCard("JC"),
      shortNameToCard("10C")
    ]);
    expect(actual.rank).toBe("Royal Flush");
  });

  test("It should be Straight Flush", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("7C"),
      shortNameToCard("8C"),
      shortNameToCard("9C"),
      shortNameToCard("10C")
    ]);
    expect(actual1.rank).toBe("Straight Flush");
    const actual2 = calculateHandRank([
      shortNameToCard("2C"),
      shortNameToCard("3C"),
      shortNameToCard("4C"),
      shortNameToCard("5C"),
      shortNameToCard("6C")
    ]);
    expect(actual2.rank).toBe("Straight Flush");
    const actual3 = calculateHandRank([
      shortNameToCard("2D"),
      shortNameToCard("3C"),
      shortNameToCard("4C"),
      shortNameToCard("5C"),
      shortNameToCard("6C")
    ]);
    expect(actual3.rank).not.toEqual("Straight Flush");
  });

  test("It should be Four of a Kind", () => {
    const actual = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("JD"),
      shortNameToCard("JS"),
      shortNameToCard("JH"),
      shortNameToCard("3C")
    ]);
    expect(actual.rank).toBe("Four of a Kind");
  });

  test("It should be Full House", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("JD"),
      shortNameToCard("JS"),
      shortNameToCard("3H"),
      shortNameToCard("3C")
    ]);
    expect(actual1.rank).toBe("Full House");
    const actual2 = calculateHandRank([
      shortNameToCard("6C"),
      shortNameToCard("3D"),
      shortNameToCard("6S"),
      shortNameToCard("6H"),
      shortNameToCard("3C")
    ]);
    expect(actual2.rank).toBe("Full House");
  });

  test("It should be Flush", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("7C"),
      shortNameToCard("8C"),
      shortNameToCard("9C"),
      shortNameToCard("3C")
    ]);
    expect(actual1.rank).toBe("Flush");
    const actual2 = calculateHandRank([
      shortNameToCard("2H"),
      shortNameToCard("7H"),
      shortNameToCard("JH"),
      shortNameToCard("AH"),
      shortNameToCard("4h")
    ]);
    expect(actual2.rank).toBe("Flush");
  });

  test("It should be Straight", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("7D"),
      shortNameToCard("8S"),
      shortNameToCard("9C"),
      shortNameToCard("10C")
    ]);
    expect(actual1.rank).toBe("Straight");
    const actual2 = calculateHandRank([
      shortNameToCard("2H"),
      shortNameToCard("3D"),
      shortNameToCard("4S"),
      shortNameToCard("5C"),
      shortNameToCard("6C")
    ]);
    expect(actual2.rank).toBe("Straight");
  });

  test("It should be Three of a Kind", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("JD"),
      shortNameToCard("JS"),
      shortNameToCard("9C"),
      shortNameToCard("10C")
    ]);
    expect(actual1.rank).toBe("Three of a Kind");
    const actual2 = calculateHandRank([
      shortNameToCard("2H"),
      shortNameToCard("2D"),
      shortNameToCard("2S"),
      shortNameToCard("5C"),
      shortNameToCard("6C")
    ]);
    expect(actual2.rank).toBe("Three of a Kind");
  });

  test("It should be Two Pair", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("JD"),
      shortNameToCard("9S"),
      shortNameToCard("9C"),
      shortNameToCard("10C")
    ]);
    expect(actual1.rank).toBe("Two Pair");
    const actual2 = calculateHandRank([
      shortNameToCard("2H"),
      shortNameToCard("2D"),
      shortNameToCard("5S"),
      shortNameToCard("5C"),
      shortNameToCard("6C")
    ]);
    expect(actual2.rank).toBe("Two Pair");
  });

  test("It should be One Pair", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("JC"),
      shortNameToCard("JD"),
      shortNameToCard("9S"),
      shortNameToCard("8C"),
      shortNameToCard("10C")
    ]);
    expect(actual1.rank).toBe("Pair");
    const actual2 = calculateHandRank([
      shortNameToCard("2H"),
      shortNameToCard("2D"),
      shortNameToCard("5S"),
      shortNameToCard("4C"),
      shortNameToCard("6C")
    ]);
    expect(actual2.rank).toBe("Pair");
  });

  test("It should be High Card", () => {
    const actual1 = calculateHandRank([
      shortNameToCard("QD"),
      shortNameToCard("7S"),
      shortNameToCard("5H"),
      shortNameToCard("3C"),
      shortNameToCard("10S")
    ]);
    expect(actual1.rank).toBe("High Card");

    const actual2 = calculateHandRank([
      shortNameToCard("2H"),
      shortNameToCard("3D"),
      shortNameToCard("4S"),
      shortNameToCard("5C"),
      shortNameToCard("7C")
    ]);
    expect(actual2.rank).toBe("High Card");
  });
});
