import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '理刃科技',
  description: '理刃科技 LiRenTech 文档，包括各种开发规范和软件的文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/intro' },
      { text: '开发', link: '/dev/' },
      { text: '团队', link: '/team-activities/' },
      { text: 'Visual File', link: '/visual-file/' },
    ],
    logo: '/logo.jpg',
    sidebar: {
      dev: [
        {
          text: '开发',
          link: '/dev/',
        },
        {
          text: '开发规范',
          base: '/dev/code-standards/',
          items: [
            {
              text: 'JS/TS',
              link: 'js-ts',
            },
            {
              text: 'Python',
              link: 'python',
            },
            {
              text: 'HTML',
              link: 'html',
            },
            {
              text: '命名',
              link: 'naming',
            },
            {
              text: 'Git',
              link: 'git',
            },
          ],
        },
        {
          text: '经验分享',
          base: '/dev/experience/',
          items: [
            {
              text: '编程习惯',
              link: 'code-habits',
            },
            {
              text: 'VS Code 配置指南',
              link: 'vscode-config-guide',
            },
          ],
        },
      ],
      'team-activities': [
        {
          text: '团队活动',
          link: '/team-activities/',
        },
      ],
      'visual-file': [
        {
          text: 'Visual File',
          link: '/visual-file/',
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/LiRenTech' }],
    search: {
      provider: 'local',
    },
    footer: {
      copyright: 'Copyright © 2024 理刃科技',
    },
    editLink: {
      text: '编辑页面',
      pattern: 'https://github.com/LiRenTech/docs/edit/master/docs/:path',
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
