import {
  computed,
  unref,
  watch,
} from 'vue'
import {useCartStorage} from '@/modules/cart/storages'
import {useCartApiAdapter} from '@/modules/cart/services'

/**
 * Обновляем коэффициент корзины и коэффициенты маркетов в корзине.
 * @todo Добавить интервал обновления корзины.
 */
export const useSubscribeToUpdateCart = () => {
  const api = useCartApiAdapter()
  const storage = useCartStorage()
  const {cart} = storage

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

    storage.updateCart(updatedCart)
  }, {immediate: true})
}
