type GameId = number
type MarketParam = number
type MarketTypeId = number
type PlayerId = number
type MarketId = `${GameId}-${MarketTypeId}-${MarketParam | 0}-${PlayerId | 0}`

export interface SuperMarket {
  champId: number
  champName: string
  champNameEng: string
  coef: UFloat
  gameAwayTeamName: string
  gameAwayTeamNameEng: string
  gameHomeTeamName: string
  gameHomeTeamNameEng: string
  gameId: GameId
  gameName: string | undefined
  gameNameEng: string | undefined
  gameShortId: number
  groupId: number
  groupName: string | undefined
  id: MarketId
  isBlocked: boolean
  kind: number
  name: string
  /** @todo Возможно, вместо undefined лучше использовать 0. */
  param: number | undefined
  /** @todo Возможно, вместо undefined лучше использовать 0. */
  playerId: number | undefined
  playerName: string | undefined
  sportId: number
  sportName: string
  sportNameEng: string
  typeId: number
}
