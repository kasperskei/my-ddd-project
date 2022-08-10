<script lang="ts" setup>
import {RouterLink, useRouter} from 'vue-router'
import type {Champ, Game} from '@/modules/dashboard/domain/types'

const emit = defineEmits<{
  (event: 'selectPinGame', game: Game): void
  (event: 'selectSubGame', game: Game): void
}>()
const props = defineProps<{
  champ: Champ
  game: Game
}>()

const onSelectPinGame = () => emit('selectPinGame', props.game)
const onSelectSubGames = () => emit('selectSubGame', props.game)
</script>

<template>
  <div class="dashboard-game">
    <div>
      <button
        type="button"
        @click="onSelectPinGame"
      >
        Pin
      </button>
      <button
        type="button"
        @click="onSelectSubGames"
      >
        Sub
      </button>
    </div>
    <div>
      <p>{{ champ.name }}</p>
      <!-- @todo Через `useLink` будет производительней. -->
      <RouterLink
        :to="{
          name: 'game',
          params: {
            gameStatus: 'live',
            sportId: champ.sportId,
            champId: champ.id,
            gameId: game.id,
          },
        }"
      >
        <p>{{ game.homeTeamName }}</p>
        <p>{{ game.awayTeamName }}</p>
      </RouterLink>
      <p>{{ game.startedAt.toLocaleDateString() }} / {{ game.startedAt.toLocaleTimeString() }}</p>
    </div>
  </div>
</template>

<style lang="pcss" scoped>
.dashboard-game {
  display: flex;
  align-items: center;
}
</style>
