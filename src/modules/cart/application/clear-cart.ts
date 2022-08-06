import {unref} from 'vue'
import {emptyCart} from '@/modules/cart/domain'
import {useCartStorage} from '@/modules/cart/storages'

/** Сценарий добавления, замены, удаления маркета из корзины. */
export const useClearCart = () => {
  const storage = useCartStorage()

  const clearCart = (): void => {
    const cart = emptyCart(unref(storage.cart))

    storage.updateCart(cart)
  }

  return {
    clearCart,
  }
}
