// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import GithubRelease from './GithubRelease.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('GithubRelease', GithubRelease);
  },
} satisfies Theme;
