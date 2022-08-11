import {createApp} from 'vue'

import {withHttp} from '@/app/providers/http'
import {withI18n} from '@/app/providers/i18n'
import {withLogger} from '@/app/providers/logger'
import {withRouter} from '@/app/providers/router'
import {withStore} from '@/app/providers/store'

import '@/app/providers/polyfill'
import '@/app/styles/index.pcss'

import App from '@/app/app.vue'

const app = createApp(App)

app.config.performance = import.meta.env.DEV

/**
 * @todo Описать логику инициализации приложения:
 *   - Загрузка конфигурации приложения
 *   - Загрузка информации о пользователе
 *   - Загрузка словарей переводов
 *   - Загрузка иконок
 *   - Установка адреса CDN
 */
app.use(withLogger())
app.use(withHttp())
app.use(withI18n())
app.use(withRouter())
app.use(withStore())

app.mount('#app')
