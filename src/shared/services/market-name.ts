import type {MarketGroupId, MarketTypeId} from '@/shared/domain'

const buildBetsNamesScriptSrc = (
  kind: 'groups' | 'types',
  format: 'long' | 'short',
  language: string,
): string => `https://ref229.tech/genfiles/cms/betstemplates/market_${kind}_${format}_${language}.json`

buildBetsNamesScriptSrc('groups', 'long', 'en')

export interface MarketTypeRaw {
  /** Id группы маркетов. */
  IdG: string
  /** Шаблон имени маркета. */
  N: string
  /** Id шаблона маркета. */
  T: number
}
export type MarketTypesRaw = Record<MarketTypeId, MarketTypeRaw>

export interface MarketGroupRaw {
  /** Название группы маркетов. */
  N: string
  /** Количество типов в группе. */
  C: number
}
export type MarketGroupsRaw = Record<MarketGroupId, MarketGroupRaw>

export const getMarketName = (): string => ''

export const getMarketName = (): string => ''

export const getMarketName = (): string => ''
