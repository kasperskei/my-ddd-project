/* eslint-disable import/no-extraneous-dependencies */
import {resolve} from 'node:path'
import vue from '@vitejs/plugin-vue'
import {createHtmlPlugin} from 'vite-plugin-html'
import {defineConfig} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'

/**
 * @see https://vitejs.dev/config
 * @todo Полифилы для старых браузеров https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
 * @todo Критический CSS https://github.com/nystudio107/rollup-plugin-critical
 * @todo Сжатие статики https://github.com/alloc/vite-plugin-compress
 * @todo PWA https://github.com/antfu/vite-plugin-pwa
 * @todo Тестирование https://github.com/vitest-dev/vitest
 * @todo Статическая генерация сайта https://github.com/antfu/vite-ssg
 * @todo Унифицировать dev и prod сборку https://vitejs.dev/guide/migration.html#using-esbuild-deps-optimization-at-build-time
 */
export default defineConfig(() => ({
  build: {
    /** @see https://vitejs.dev/config/build-options.html#build-target */
    target: 'modules', // 'esnext', 'modules', 'es2015'
  },
  plugins: [
    /** @see https://github.com/vitejs/vite/tree/main/packages/plugin-vue */
    vue({
      /** @see https://vuejs.org/guide/extras/reactivity-transform.html#retaining-reactivity-across-function-boundaries */
      reactivityTransform: false,
    }),
    /** @see https://github.com/anncwb/vite-plugin-html */
    createHtmlPlugin({
      minify: true,
    }),
    /** @see https://github.com/btd/rollup-plugin-visualizer */
    ...(['sunburst', 'treemap', 'network'] as const).map((template) => visualizer({
      brotliSize: true,
      filename: `dist/stats-${template}.html`,
      gzipSize: true,
      template,
    })),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
}))
