<script lang="ts" setup>
/** @todo Добавить поддержку long игр. */
import {computed} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import {useDashboardStoreAdapter} from '@/modules/dashboard/services/dashboard-store-adapter'
import DashboardChamp from '@/modules/dashboard/ui/desktop/dashboard-champ-head.vue'
import DashboardGameInfo from '@/modules/dashboard/ui/desktop/dashboard-game-info.vue'
import DashboardGameMarkets from '@/modules/dashboard/ui/desktop/dashboard-game-markets.vue'
import type {
  ChampId,
  SectionSportId,
  SportId,
} from '@/shared/domain/index'

const props = defineProps<{
  champIds: ChampId[]
  sectionSportIds: SectionSportId[]
}>()

const store = useDashboardStoreAdapter()
const {
  settings,
  schemaBySportId,
  champsBySportId,
  gamesByChampId,
  subGamesByGameId,
  marketsByGameId,
} = store
</script>

<template>
  <div class="dashboard">
    <ul class="dashboard-champs">
      <li
        v-for="champ in champs"
        :key="champ.id"
        class="dashboard-champ"
      >
        <DashboardChamp :champ="champ" />

        <ul class="dashboard-games">
          <li
            v-for="game in gamesByChampId.get(champ.id)"
            :key="game.id"
            class="dashboard-game"
          >
            <div class="dashboard-game-main">
              <DashboardGameInfo
                :champ="champ"
                :game="game"
              />
              <DashboardGameMarkets
                :marketGroups="game.marketGroups"
              />
            </div>

            <ul class="dashboard-sub-games">
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
                />
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
