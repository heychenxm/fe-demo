import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // 基础路径（根据环境调整）
    base: mode === 'production' ? '/' : '/',
    plugins: [vue()],
    resolve: {
      // 路径别名
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    // 开发服务器配置
    server: {
      port: 3000,
      open: true
    },
    // 构建配置
    build: {
      outDir: `dist-${mode}`, // 不同环境打包到不同目录
      sourcemap: mode === 'development' // 测试环境生成 sourcemap
    }
  }
})