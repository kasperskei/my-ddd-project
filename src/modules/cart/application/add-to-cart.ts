import {unref} from 'vue'
import type {CartMarket} from '@/modules/cart/domain'
import {
  containsMarket,
  insertOrReplaceMarket,
  removeMarket,
} from '@/modules/cart/domain'
import {useCartStoreAdapter} from '@/modules/cart/services'

/** Сценарий добавления, замены, удаления маркета из корзины. */
export const useAddToCart = () => {
  const store = useCartStoreAdapter()

  const addToCart = (market: CartMarket): void => {
    const cart = unref(store.cart)

    if (containsMarket(cart, market.id)) {
      removeMarket(cart, market.id)
    } else {
      insertOrReplaceMarket(cart, market)
    }

    store.updateCart(cart)
  }

  return {
    addToCart,
  }
}
