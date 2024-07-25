# HTML, Vue, JSX 开发规范

- 属性值使用双引号 `"`
- 2 空格缩进
- 除了 HTML，自闭合标签使用 `<img />` 而不是 `<img>`
- 组件名使用 PascalCase 命名法，如 `HelloWorld`
- 事件名使用 kebab-case 命名法，如 `click-btn`

## Vue

- 除了 `<template>`，其他块的顶级不缩进
- 使用 `<script setup lang="ts"` 而不是 `<script lang="ts" setup>`
- Tailwind CSS 项目使用 `<style scoped lang="postcss"` 而不是 `<style lang="postcss" scoped>` 或 `<style scoped>`
- Tailwind CSS 项目需要使用 Prettier 插件 `prettier-plugin-tailwindcss`
