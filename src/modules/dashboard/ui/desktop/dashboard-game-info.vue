<script lang="ts" setup>
import {RouterLink, useRouter} from 'vue-router'
import type {Champ, Game} from '@/modules/dashboard/domain/types'

const marketGroups = defineProps<{
  champ: Champ
  game: Game
}>()
</script>

<template>
  <div class="dashboard-game-block">
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
</template>
