import {unref} from 'vue'
import {emptyCart} from '@/modules/cart/domain'
import {useCartStoreAdapter} from '@/modules/cart/services'

/** Сценарий добавления, замены, удаления маркета из корзины. */
export const useClearCart = () => {
  const store = useCartStoreAdapter()

  const clearCart = (): void => {
    const cart = emptyCart(unref(store.cart))

    store.updateCart(cart)
  }

  return {
    clearCart,
  }
}
