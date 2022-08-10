<script lang="ts" setup>
/** @todo Добавить поддержку long игр. */
import {computed} from 'vue'
import {RouterLink, useRouter} from 'vue-router'

const champs = [
  {
    id: 1,
    name: 'Лига Чемпионов УЕФА',
    sportId: 1,
    icon: 'icon.png',
    sectionId: 1,
    games: [
      {
        id: 1,
        homeTeamName: 'Жальгирис',
        awayTeamName: 'Будё-Глимт',
        startedAt: new Date(),
        marketGroups: [
          {
            id: 1,
            markets: [
              {
                typeId: 1,
                groupId: 1,
                param: 0,
                coef: 3.1,
              },
              {
                typeId: 2,
                groupId: 1,
                param: 0,
                coef: 1.2,
              },
              {
                typeId: 3,
                groupId: 1,
                param: 0,
                coef: 4.6,
              },
            ],
          },
        ],
      },
    ],
  },
]

const groups = [
  {
    id: 1,
    name: '1x2',
    types: [
      {
        id: 1,
        name: '1',
      },
      {
        id: 2,
        name: 'X',
      },
      {
        id: 3,
        name: '2',
      },
    ],
  },
]
</script>

<template>
  <div class="dashboard">
    <ul class="dashboard-champs">
      <li
        v-for="champ in champs"
        :key="champ.id"
        class="dashboard-champ"
      >
        <div class="dashboard-champ-head">
          <div>
            <span>{{ champ.sportId }}</span>
            <span>{{ champ.icon }}</span>
            <span>{{ champ.name }}</span>
          </div>
          <div>
            <ul class="dashboard-champ-market-groups">
              <li
                v-for="group in groups"
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

        <ul class="dashboard-games">
          <li
            v-for="game in champ.games"
            :key="game.id"
            class="dashboard-game"
          >
            <div class="dashboard-game-main">
              <div class="dashboard-game-block">
                <p>{{ champ.name }}</p>
                <RouterLink
                  :to="{
                    name: 'game',
                    params: {
                      gameStatus: 'live',
                      section: champ.sectionId,
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

              <ul class="dashboard-game-market-groups">
                <li
                  v-for="group in game.marketGroups"
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

                <ul class="dashboard-game-market-groups">
                  <li
                    v-for="group in subGame.marketGroups"
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
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
