import type {Plugin} from 'vue'
import {createLogger} from '@/shared/services/logger'

export const withLogger = (): Plugin => createLogger()
