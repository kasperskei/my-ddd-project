<script lang="ts" setup>
import {computed, unref} from 'vue'
import {isDefine, isString} from '@/shared/lib/predicate'
import type {MarketGroupId, MarketTypeId} from '@/shared/domain'
import type {DashboardSchema, Market} from '@/modules/dashboard/domain'

const emit = defineEmits<{
  (event: 'selectMarket', market: Market): void
}>()
const props = defineProps<{
  markets: Market[]
  schema: DashboardSchema
}>()

interface DashboardGroup {
  children: DashboardGroupChildren
  groupId: MarketGroupId
}
type DashboardGroupChildren = [
  Market | undefined,
  Market | string | undefined,
  Market | undefined,
]

const reversedMarkets = computed(() => [...props.markets].reverse())
const marketByTypeId = computed(() => new Map(unref(reversedMarkets).map((market) => [market.typeId, market])))
const paramByGroupId = computed(() => new Map(unref(reversedMarkets).map((market) => [market.groupId, market.groupParam])))

const groups = computed<DashboardGroup[]>(() => {
  const markets = unref(marketByTypeId)
  const params = unref(paramByGroupId)

  return props.schema.groups
    .map(({groupId, types}) => ({
      groupId,
      children: types.map((type) => ('typeId' in type
        ? markets.get(type.typeId)
        : params.get(groupId))) as DashboardGroupChildren,
    }))
})

// const marketsByTypeId = computed(() => groupBy<MarketTypeId, Market>(props.markets, 'typeId'))
// const paramByGroupId = computed(() => {
//   const marketsWithParam = props.markets.filter((market) => GROUP_IDS_WITH_PARAM.includes(market.groupId))
//   const uniqueMarkets = uniqueBy(marketsWithParam, 'groupId')
//   const result = new Map(uniqueMarkets.map((market) => [
//     market.groupId,
//     buildDashboardGroupParam(market.typeId, market.param),
//   ]))

//   return result
// })

// const groups = computed<DashboardGroup[]>(() => props.schema.groups.map(({groupId, types}) => {
//   const group = props.marketGroups[groupId]
//   const children = group === undefined
//     ? EMPTY_MARKET_GROUP
//     : types.map((type) => {
//       if ('typeId' in type) {
//         const markets = group.marketTypes[type.typeId]
//         return markets?.[0]
//       }

//       return type.name
//     }) as DashboardGroupChildren

//   return {
//     groupId,
//     children,
//   }
// }))

const onSelectMarket = (market: Market): void => emit('selectMarket', market)
</script>

<template>
  <ul class="dashboard-game-market-groups">
    <li
      v-for="group in groups"
      :key="group.groupId"
      class="dashboard-game-market-group"
    >
      <ul class="dashboard-game-market-types">
        <li
          v-for="(child, index) in group.children"
          :key="index"
          class="dashboard-game-market-type"
        >
          <span v-if="!isDefine(child)">-</span>
          <span v-else-if="isString(child)">{{ child }}</span>
          <button
            v-else
            type="button"
            @click="onSelectMarket(child)"
          >
            {{ child.coef }}
          </button>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="pcss" scoped>
.dashboard-game-market-groups,
.dashboard-game-market-types {
  display: flex;
  align-items: center;
}
.dashboard-game-market-type {
  padding: 0.5rem;
}
</style>
