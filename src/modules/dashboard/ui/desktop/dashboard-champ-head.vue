<script lang="ts" setup>
import type {Champ, DashboardSchema} from '@/modules/dashboard/domain'

const props = defineProps<{
  champ: Champ
  schema: DashboardSchema
}>()
</script>

<template>
  <div class="dashboard-champ">
    <div>
      <span>{{ champ.sportId }}</span>
      <span>{{ champ.logotype }}</span>
      <span>{{ champ.name }}</span>
    </div>
    <div>
      <ul class="dashboard-champ-market-groups">
        <li
          v-for="group in schema.groups"
          :key="group.groupId"
          class="dashboard-champ-market-group"
        >
          <ul class="dashboard-champ-market-types">
            <li class="dashboard-champ-market-type">
              {{ group.types[0].name }}
            </li>
            <li class="dashboard-champ-market-type">
              {{ group.types[1].name }}
            </li>
            <li class="dashboard-champ-market-type">
              {{ group.types[2].name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="pcss" scoped>
.dashboard-champ,
.dashboard-champ-market-groups,
.dashboard-champ-market-types {
  display: flex;
  align-items: center;
}
.dashboard-champ-market-type {
  padding: 0.5rem;
}
</style>
