import {
  computed,
  unref,
  watch,
} from 'vue'
import {useCartApiAdapter, useCartStoreAdapter} from '@/modules/cart/services'

/**
 * Обновляем коэффициент корзины и коэффициенты маркетов в корзине.
 * @todo Добавить интервал обновления корзины.
 */
export const useSubscribeToUpdateCart = () => {
  const api = useCartApiAdapter()
  const store = useCartStoreAdapter()
  const {cart} = store

  const marketIds = computed(() => unref(cart).markets.map((market) => market.id))
  const typeId = computed(() => unref(cart).typeId)

  /** @todo Добавить идентификатор аккаунта. */
  const trigger = computed(() => [
    // unref(accountId),
    unref(marketIds),
    unref(typeId),
  ].flat().filter(Boolean).join('-'))

  watch(trigger, async () => {
    const updatedCart = await api.updateCart(unref(cart))

    store.updateCart(updatedCart)
  }, {immediate: true})
}
