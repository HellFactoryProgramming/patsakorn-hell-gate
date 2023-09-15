import { Player } from './player'
import { CardType, PlayerInterface } from './types'
import { PokerDeck } from './poker-deck'

export class Handler {
  private deck: PokerDeck
  public players: Player[] = []
  public boardCards: CardType[] = []

  constructor() {
    this.players = []
    this.deck = new PokerDeck({ shuffle: true })
  }

  public addPlayerSeat(player: PlayerInterface): Handler {
    /**
     * TODO: Add the player to the players array
     */
    return this
  }

  public getPlayerSeat(): Player[] {
    return this.players
  }

  public dealCardToPlayer(player: Player, count: number): Handler {
    /**
     * todo: find the player index and update the player hand with the new card
     */
    return this
  }

  public dealCardToAllPlayer(): Handler {
    /**
     * TODO: Deal the card to all the players
     */
    return this
  }

  public preFlop(): Handler {
    return this.dealCardToAllPlayer().dealCardToAllPlayer()
  }

  public dealFlop(): Handler {
    /**
     * Todo: add the first 3 cards to the board cards
     */
    return this
  }

  public dealTurn(): Handler {
    /**
     * Todo: Append the new card to the board cards
     */
    return this
  }

  public dealRiver(): Handler {
    return this.dealTurn()
  }

  public getBoardCards(): CardType[] {
    return this.boardCards
  }

  public getPlayers(): Player[] {
    return this.players
  }

  public dispatchToAllPlayerBoard(): Handler {
    /**
     * TODO: Dispatch the board cards to all the players
     */
    return this
  }

  public getDeck(): CardType[] {
    return this.deck.getDeck()
  }

  public gameReset(): Handler {
    this.players.forEach((p) => p.gameReset())
    this.boardCards = []
    this.deck = new PokerDeck({ shuffle: true })
    return this
  }

  public kickAllPlayers(): Handler {
    /**
     * TODO: Remove all the players from the players array
     */
    return this
  }

  public kickPlayer(player: Player): Handler {
    /**
     * TODO: Find the player index and remove the player from the players array
     */
    return this
  }
}
