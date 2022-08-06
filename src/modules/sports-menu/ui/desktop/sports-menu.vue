<script lang="ts" setup>
import {computed} from 'vue'
import {useSportsMenuStoreAdapter} from '@/modules/sports-menu/services/sports-menu-store-adapter'
import {useSubscribeToUpdateSportsMenu} from '@/modules/sports-menu/application/subscribe-to-update-sports-menu.js'

useSubscribeToUpdateSportsMenu()

const store = useSportsMenuStoreAdapter()
const sections = computed(() => store.sportsMenu.sections)
</script>

<template>
  <div class="sports-menu">
    <div class="sports-menu-head" />
    <div class="sports-menu-body">
      <div
        v-for="section in sections"
        :key="section.id"
        class="sports-menu-section"
      >
        <div class="sports-menu-section-head">
          <span>{{ section.name }}</span>
        </div>
        <ul class="sports-menu-sports">
          <li
            v-for="sport in section.sports"
            :key="sport.id"
            class="sports-menu-sport"
          >
            <a href="#">
              <span class="sports-menu-sport-name">{{ sport.name }}</span>
              <span class="sports-menu-sport-count">({{ sport.gamesCount }})</span>
            </a>
            <ul class="sports-menu-champs">
              <li
                v-for="champ in sport.champs"
                :key="champ.id"
                class="sports-menu-champ"
              >
                <a href="#">
                  <span class="sports-menu-champ-name">{{ champ.name }}</span>
                  <span class="sports-menu-champ-count">({{ champ.gamesCount }})</span>
                </a>
                <ul class="sports-menu-champs">
                  <li
                    v-for="game in champ.games"
                    :key="game.id"
                    class="sports-menu-game"
                  >
                    <a href="#">
                      <p>{{ champ.name }}</p>
                      <p>{{ game.homeTeamName }}</p>
                      <p>{{ game.awayTeamName }}</p>
                      <p>{{ game.startedAt.toLocaleDateString() }} / {{ game.startedAt.toLocaleTimeString() }}</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
