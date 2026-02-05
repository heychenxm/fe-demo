// postcss.config.js (ES 模块语法)
export default {
  plugins: {
    // 替换原有的 tailwindcss 为 @tailwindcss/postcss
    '@tailwindcss/postcss': {},
    autoprefixer: {}, // 保留 autoprefixer（如有）
    // 其他插件（如 postcss-preset-env 等）按需保留
  }
}