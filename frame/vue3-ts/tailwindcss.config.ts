/** @type {import('tailwindcss').Config} */
export default {
  // 配置要扫描的文件（确保 Tailwind 能识别模板中的类）
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // 响应式断点（兼容 PC/移动端）
  screens: {
    sm: '375px',    // 移动端小屏
    md: '768px',    // 平板/移动端大屏
    lg: '1024px',   // 小屏 PC
    xl: '1280px',   // 中屏 PC
    '2xl': '1920px' // 大屏 PC
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
