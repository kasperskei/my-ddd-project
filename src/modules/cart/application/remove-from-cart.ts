import {unref} from 'vue'
import type {CartMarket} from '@/modules/cart/domain'
import {removeMarket} from '@/modules/cart/domain'
import {useCartStoreAdapter} from '@/modules/cart/services'

/** Сценарий добавления, замены, удаления маркета из корзины. */
export const useRemoveFromCart = () => {
  const store = useCartStoreAdapter()

  const removeFromCart = (marketId: CartMarket['id']): void => {
    const cart = removeMarket(unref(store.cart), marketId)

    store.updateCart(cart)
  }

  return {
    removeFromCart,
  }
}
