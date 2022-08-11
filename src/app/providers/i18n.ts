import {ref} from 'vue'
import type {Plugin} from 'vue'
import {createI18n} from '@/shared/services/i18n'

export const withI18n = (): Plugin => createI18n({
  dictionary: ref(new Map([['test', 'test']])),
  locale: ref('ru'),
})
