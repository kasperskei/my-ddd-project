import {unref} from 'vue'
import type {CartMarket} from '@/modules/cart/domain'
import {
  containsMarket,
  insertOrReplaceMarket,
  removeMarket,
} from '@/modules/cart/domain'
import {useCartStorage} from '@/modules/cart/storages'

/** Сценарий добавления, замены, удаления маркета из корзины. */
export const useAddToCart = () => {
  const storage = useCartStorage()

  const addToCart = (market: CartMarket): void => {
    const cart = unref(storage.cart)

    if (containsMarket(cart, market.id)) {
      removeMarket(cart, market.id)
    } else {
      insertOrReplaceMarket(cart, market)
    }

    storage.updateCart(cart)
  }

  return {
    addToCart,
  }
}
