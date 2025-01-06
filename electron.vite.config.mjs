import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    server: {
      port: 3000,
      host: true,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/dev-api': {
          target: 'http://localhost:8888',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
        // '/prod-api': {
        //   target: 'http://localhost:8888',
        //   changeOrigin: true,
        //   rewrite: (p) => p.replace(/^\/prod-api/, '')
        // }
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    // 关闭sass警告
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api', 'color-functions']
        }
      }
    }
  }
})
