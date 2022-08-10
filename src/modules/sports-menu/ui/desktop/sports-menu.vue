<script lang="ts" setup>
import {computed} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import {useSportsMenuStoreAdapter} from '@/modules/sports-menu/services'
import {useSubscribeToUpdateSportsMenu} from '@/modules/sports-menu/application'

useSubscribeToUpdateSportsMenu()

const store = useSportsMenuStoreAdapter()
const sections = computed(() => store.sportsMenu.sections)

const router = useRouter()
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
            <RouterLink
              :to="{
                name: 'home',
                params: {
                  gameStatus: 'live',
                  section: section.id,
                  sportId: sport.id,
                },
              }"
            >
              <span class="sports-menu-sport-name">{{ sport.name }}</span>
              <span class="sports-menu-sport-count">({{ sport.gamesCount }})</span>
            </RouterLink>
            <ul class="sports-menu-champs">
              <li
                v-for="champ in sport.champs"
                :key="champ.id"
                class="sports-menu-champ"
              >
                <RouterLink
                  :to="{
                    name: 'home',
                    params: {
                      gameStatus: 'live',
                      section: section.id,
                      sportId: sport.id,
                      champId: champ.id,
                    },
                  }"
                >
                  <span class="sports-menu-champ-icon">{{ champ.icon }}</span>
                  <span class="sports-menu-champ-name">{{ champ.name }}</span>
                  <span class="sports-menu-champ-count">({{ champ.gamesCount }})</span>
                </RouterLink>
                <ul class="sports-menu-champs">
                  <li
                    v-for="game in champ.games"
                    :key="game.id"
                    class="sports-menu-game"
                  >
                    <RouterLink
                      :to="{
                        name: 'game',
                        params: {
                          gameStatus: 'live',
                          section: section.id,
                          sportId: sport.id,
                          champId: champ.id,
                          gameId: game.id,
                        },
                      }"
                    >
                      <p>{{ champ.name }}</p>
                      <p>{{ game.homeTeamName }}</p>
                      <p>{{ game.awayTeamName }}</p>
                      <p>{{ game.startedAt.toLocaleDateString() }} / {{ game.startedAt.toLocaleTimeString() }}</p>
                    </RouterLink>
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
