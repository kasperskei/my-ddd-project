import {ref} from 'vue'
import type {Plugin} from 'vue'
import {createHttp} from '@/shared/services/http'

export const withHttp = (): Plugin => createHttp()
