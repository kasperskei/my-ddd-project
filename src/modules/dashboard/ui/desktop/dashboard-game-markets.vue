<script lang="ts" setup>
import type {Market, MarketsGroup} from '@/modules/dashboard/domain'

const emit = defineEmits<{
  (event: 'selectMarket', market: Market): void
}>()
const props = defineProps<{
  marketGroups: MarketsGroup[]
}>()

const onSelectMarket = (market: Market): void => emit('selectMarket', market)
</script>

<template>
  <ul class="dashboard-game-market-groups">
    <li
      v-for="group in marketGroups"
      :key="group.groupId"
      class="dashboard-game-market-group"
    >
      <ul class="dashboard-game-market-types">
        <li
          v-for="market in group.markets"
          :key="market.typeId"
          class="dashboard-game-market-type"
        >
          <button
            type="button"
            @click="onSelectMarket(market)"
          >
            {{ market.coef }}
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
