<script lang="ts" setup>
const marketGroups = defineProps<{
  marketGroups: any[]
}>()
</script>

<template>
  <ul class="dashboard-game-market-groups">
    <li
      v-for="group in marketGroups"
      :key="group.id"
      class="dashboard-game-market-group"
    >
      <ul class="dashboard-game-market-types">
        <li
          v-for="market in group.markets"
          :key="market.typeId"
          class="dashboard-game-market-type"
        >
          {{ market.coef }}
        </li>
      </ul>
    </li>
  </ul>
</template>
