import { Handler } from "../handler";

describe("Test Handler class", function() {
  test("try to get deck 52 cards", function() {
    const handler = new Handler();
    expect(handler.getDeck().length).toBe(52);
  });

  test("game will reset all player will empty hand", function() {
    const handler = new Handler();
    handler
      .addPlayerSeat({ hand: [], name: "John", position: 1 })
      .addPlayerSeat({ hand: [], name: "Lolin", position: 2 })
      .dealCardToAllPlayer()
      .gameReset();
    handler.getPlayers().forEach(p => {
      expect(p.getHand().length).toBe(0);
    });
  });

  test("should return 0 (No player by default)", () => {
    const handler = new Handler();
    expect(handler.getPlayers().length).toBe(0);
  });

  test("should return 1 (1 player added)", () => {
    const handler = new Handler();
    handler.addPlayerSeat({ hand: [], position: 1 });
    expect(handler.getPlayers().length).toBe(1);
  });

  test("try to add card to player it should have card in their hand", () => {
    const handler = new Handler();
    handler
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .dealCardToPlayer(handler.players[0], 1);
    const playerHand = handler.players[0].getHand();
    expect(playerHand.length).toBe(1);
    expect(handler.getPlayers()[0].getHand().length).toBe(1);
  });

  test("try to add card to all player it should have card in their hand", () => {
    const handler = new Handler();
    handler
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .dealCardToAllPlayer()
      .dealCardToAllPlayer();
    expect(handler.getPlayers()[0].getHand().length).toBe(2);
    expect(handler.getPlayers()[1].getHand().length).toBe(2);
  });

  test("try to deal flop it should have 3 card in flop", () => {
    const handler = new Handler();
    handler.dealFlop();
    expect(handler.boardCards.length).toBe(3);
  });

  test("try to deal turn it should have 5 card in flop", () => {
    const handler = new Handler();
    handler.dealFlop().dealTurn().dealTurn();
    expect(handler.getBoardCards().length).toBe(5);
  });

  test("try to deal river it should have 5 card in flop", () => {
    const handler = new Handler();
    handler.dealFlop().dealTurn().dealRiver();
    expect(handler.getBoardCards().length).toBe(5);
  });

  test("try to dispatch board to all player it should have 5 card in flop", () => {
    const handler = new Handler();
    handler
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .dealFlop()
      .dealTurn()
      .dealRiver()
      .dispatchToAllPlayerBoard();
    expect(handler.getPlayers()[0].getBoardCards().length).toBe(5);
    expect(handler.getPlayers()[1].getBoardCards().length).toBe(5);
  });

  test("try to kick all player", () => {
    const handler = new Handler();
    handler
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .addPlayerSeat({ hand: [], position: handler.getPlayerSeat().length + 1 })
      .dealFlop()
      .dealTurn()
      .dealRiver()
      .dispatchToAllPlayerBoard()
      .kickAllPlayers();
    expect(handler.getPlayers().length).toBe(0);
  });

  test("try to kick specific player", () => {
    const handler = new Handler();
    handler
      .addPlayerSeat({
        hand: [],
        name: "Gorokgod Kotchasan",
        position: handler.getPlayerSeat().length + 1
      })
      .addPlayerSeat({
        hand: [],
        name: "Elon Dog",
        position: handler.getPlayerSeat().length + 1
      })
      .dealFlop()
      .dealTurn()
      .dealRiver()
      .dispatchToAllPlayerBoard()
      .kickPlayer(handler.getPlayers()[0]);
    expect(handler.getPlayers().length).toBe(1);
    expect(handler.getPlayers()[0].name).toBe("Elon Dog");
  });
});
