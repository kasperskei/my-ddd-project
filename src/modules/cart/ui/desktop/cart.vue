<script lang="ts" setup>
import {reactify, toReactive} from '@vueuse/core'
import {useCartStoreAdapter} from '@/modules/cart/services'
import {
  useClearCart,
  useRemoveFromCart,
  useSubscribeToUpdateCart,
} from '@/modules/cart/application'
import {
  getAvailableSystemValues,
  getAvailableTypes,
  getMarketsCount,
} from '@/modules/cart/domain'
import type {CartMarket} from '@/modules/cart/domain'

useSubscribeToUpdateCart()
const {clearCart} = useClearCart()
const {removeFromCart} = useRemoveFromCart()
const store = useCartStoreAdapter()
const cart = toReactive(store.cart)
const types = reactify(getAvailableTypes)(cart)
const systemValues = reactify(getAvailableSystemValues)(cart)
const marketsCount = reactify(getMarketsCount)(cart)

const onClearCart = (): void => {
  clearCart()
}
const onRemoveMarket = (marketId: CartMarket['id']): void => {
  removeFromCart(marketId)
}
</script>

<template>
  <div class="cart">
    <div class="cart-header">
      <span>Ваши ставки</span>
    </div>

    <ul class="cart-items">
      <li
        v-for="market in cart.markets"
        :key="market.id"
        class="cart-item"
      >
        <div class="cart-bet">
          <p>
            <button
              type="button"
              @click="onRemoveMarket(market.id)"
            >
              Удалить
            </button>
          </p>
          <p>
            {{ market.gameShortId }}
            {{ market.champName }}
          </p>
          <p>
            {{ market.gameHomeTeamName }}
            -
            {{ market.gameAwayTeamName }}
          </p>
          <p>
            {{ market.coef }}
            {{ market.name }}
          </p>
        </div>
      </li>
    </ul>

    <div>
      <p>
        <select>
          <option
            v-for="type in types"
            :key="type"
            :value="type"
          >
            {{ type }}
          </option>
        </select>
        <button
          type="reset"
          @click="onClearCart"
        >
          Очистить
        </button>
      </p>

      <p v-if="systemValues.length > 0">
        <span>Значение системы:</span>
        <select>
          <option
            v-for="systemValue in systemValues"
            :key="systemValue"
            :value="systemValue"
          >
            {{ systemValue }} / {{ marketsCount }}
          </option>
        </select>
      </p>

      <p>
        <span class="cart-coef-label">Итоговый коэффициент</span>
        <span class="cart-coef-value">{{ cart.coef }}</span>
      </p>

      <p>
        <span>Сумма ставки</span>
        <input
          v-model.number="cart.amount"
          type="text"
          pattern="[\d,.]*"
          inputmode="decimal"
        >
      </p>
    </div>
  </div>
</template>
