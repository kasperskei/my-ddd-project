import {createGlobalState, useStorage} from '@vueuse/core'
import type {Ref} from 'vue'
import type {ComposeCart} from '@/modules/cart/domain'
import {createEmptyCart} from '@/modules/cart/domain'

/**
 * @todo Возможно, стоит хранить только маркеты в хранилище.
 */
const useCartState = createGlobalState(
  () => useStorage<ComposeCart>('cart', createEmptyCart()),
)

export const useCartStorage = (): {
  cart: Ref<ComposeCart>
  updateCart: (cart: ComposeCart) => void
} => {
  const state = useCartState()

  const updateCart = (cart: ComposeCart): void => {
    state.value = cart
  }

  return {
    cart: state,
    updateCart,
  }
}
