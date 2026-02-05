/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // 处理 .vue 文件
    '^.+\\.tsx?$': 'ts-jest',  // 处理 .ts/.tsx 文件
    '^.+\\.js$': 'babel-jest'  // 处理 .js 文件
  },
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  moduleNameMapper: { 
    // 别名配置（和 vite.config.ts 保持一致）
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/__tests__/**/*.spec.(ts|js)', '**/*.test.(ts|js)'],
  collectCoverage: false, // 是否生成覆盖率报告
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary']
}