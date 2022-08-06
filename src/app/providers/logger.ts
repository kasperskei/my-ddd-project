import type {Plugin} from 'vue'
import {createLogger} from '@/shared/lib/infrastructure/logger'

export const withLogger = (): Plugin => createLogger()
