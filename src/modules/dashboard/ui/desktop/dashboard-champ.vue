<script lang="ts" setup>
import type {Champ} from '@/modules/dashboard/domain/types'

const marketGroups = defineProps<{
  champ: Champ
}>()
</script>

<template>
  <div>
    <div>
      <span>{{ champ.sportId }}</span>
      <span>{{ champ.logotype }}</span>
      <span>{{ champ.name }}</span>
    </div>
    <div>
      <ul class="dashboard-champ-market-groups">
        <li
          v-for="group in schemaBySportId.get(champ.sportId)!.groups"
          :key="group.id"
          class="dashboard-champ-market-group"
        >
          <ul class="dashboard-champ-market-types">
            <li
              v-for="type in group.types"
              :key="type.id"
              class="dashboard-champ-market-type"
            >
              {{ type.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
