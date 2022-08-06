import type {UiSize, UiTheme} from '@/shared/ui/types'

export interface Props {
  disabled: boolean
  loading: boolean
  narrow: boolean
  rounded: boolean
  size: UiSize
  tag: 'a' | 'button'
  theme: UiTheme
  toggled: boolean
}
