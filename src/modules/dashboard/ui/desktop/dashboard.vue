<script lang="ts" setup>
/** @todo Добавить поддержку long игр. */
import {
  computed,
  toRefs,
  unref,
} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import {useChangeDashboardSettings, useSubscribeToUpdateDashboard} from '@/modules/dashboard/application'
import {useDashboardApiAdapter, useDashboardStoreAdapter} from '@/modules/dashboard/services'
import type {
  Champ,
  Game,
  Market,
  SubGame,
} from '@/modules/dashboard/domain'
import {
  DASHBOARD_MATCH_SCHEMA,
  getOtherChampsWithGames,
  getPinnedChampsWithGames,
  hasPinnedGame,
} from '@/modules/dashboard/domain'
import type {
  ChampId,
  MarketId,
  SectionSportId,
} from '@/shared/domain'

import DashboardChampHead from '@/modules/dashboard/ui/desktop/dashboard-champ-head.vue'
import DashboardGameInfo from '@/modules/dashboard/ui/desktop/dashboard-game-info.vue'
import DashboardGameMarkets from '@/modules/dashboard/ui/desktop/dashboard-game-markets.vue'

const emit = defineEmits<{
  (event: 'selectMarket', payload: {
    champ: Champ
    game: Game | SubGame
    market: Market
  }): void
}>()
const props = defineProps<{
  /** Id маркетов, которые необходимо выделить в Dashboard. */
  selectedMarketIds: MarketId[]
  champIds: ChampId[]
  sectionSportIds: SectionSportId[]
}>()

useSubscribeToUpdateDashboard()

const {toggleSubGames, togglePinGame} = useChangeDashboardSettings()

const store = useDashboardStoreAdapter()
const {settings} = toRefs(store)

const schema = DASHBOARD_MATCH_SCHEMA

/** Вынести логику в слой application */
const hasPinnedGames = computed(() => hasPinnedGame(store.settings))
const pinnedChamps = computed(() => (unref(hasPinnedGames) ? getPinnedChampsWithGames(store) : []))
const otherChamps = computed(() => (unref(hasPinnedGames) ? getOtherChampsWithGames(store) : store.champs))
const orderedChamps = computed(() => [...unref(pinnedChamps), ...unref(otherChamps)])
// const champs = computed(() => (hasPinnedGame(store.settings) ? unref(orderedChamps) : store.champs))

const onSelectMarket = (champ: Champ, game: Game | SubGame, market: Market): void => emit('selectMarket', {champ, game, market})
const onSelectPinGame = (game: Game): void => togglePinGame(game.id)
const onSelectSubGame = (game: Game): void => toggleSubGames(game.id)
</script>

<template>
  <div class="dashboard">
    <!-- @todo Вынести в отдельный компонент. -->
    <ul class="dashboard-champs">
      <li
        v-for="champ in orderedChamps"
        :key="champ.id"
        class="dashboard-champ"
      >
        <DashboardChampHead
          :champ="champ"
          :schema="schema"
        />

        <ul class="dashboard-games">
          <li
            v-for="game in champ.games"
            :key="game.id"
            class="dashboard-game"
          >
            <div class="dashboard-game-main">
              <DashboardGameInfo
                :champ="champ"
                :game="game"
                @selectPinGame="onSelectPinGame"
                @selectSubGame="onSelectSubGame"
              />
              <DashboardGameMarkets
                :marketGroups="game.marketGroups"
                @selectMarket="onSelectMarket(champ, game, $event)"
              />
            </div>

            <ul
              v-if="settings.gameIds.includes(game.id) && game.subGames.length > 0"
              class="dashboard-sub-games"
            >
              <li
                v-for="subGame in game.subGames"
                :key="subGame.id"
                class="dashboard-sub-game"
              >
                <p class="dashboard-sub-game-name">
                  {{ subGame.name }}
                </p>
                <DashboardGameMarkets
                  :marketGroups="subGame.marketGroups"
                  @selectMarket="onSelectMarket(champ, subGame, $event)"
                />
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="pcss" scoped>
.dashboard-game-main,
.dashboard-sub-game {
  display: flex;
  align-items: center;
}
</style>
