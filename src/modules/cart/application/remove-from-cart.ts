import {unref} from 'vue'
import type {CartMarket} from '@/modules/cart/domain'
import {removeMarket} from '@/modules/cart/domain'
import {useCartStorage} from '@/modules/cart/storages'

/** Сценарий добавления, замены, удаления маркета из корзины. */
export const useRemoveFromCart = () => {
  const storage = useCartStorage()

  const removeFromCart = (marketId: CartMarket['id']): void => {
    const cart = removeMarket(unref(storage.cart), marketId)

    storage.updateCart(cart)
  }

  return {
    removeFromCart,
  }
}
