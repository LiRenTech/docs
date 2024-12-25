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
      { text: 'Project Graph', link: '/project-graph/' },
    ],
    logo: '/logo.svg',
    sidebar: {
      dev: [
        {
          text: '开发',
          link: '/dev/',
        },
        {
          text: '开发规范',
          base: '/dev/code-standards',
          items: [
            {
              text: 'JS/TS',
              link: '/js-ts',
            },
            {
              text: 'Python',
              link: '/python',
            },
            {
              text: 'Vue',
              link: '/vue',
            },
            {
              text: 'React',
              link: '/react',
            },
            {
              text: 'HTML',
              link: '/html',
            },
            {
              text: '命名',
              link: '/naming',
            },
            {
              text: 'Git',
              link: '/git',
            },
            {
              text: 'Markdown',
              link: '/markdown',
            },
          ],
        },
        {
          text: '技术栈选择',
          base: '/dev/tech-stack-choosing',
          items: [
            {
              text: '前端相关技术栈',
              link: '/frontend',
            },
          ],
        },
        {
          text: '经验分享',
          base: '/dev/experience',
          items: [
            {
              text: '编程习惯',
              link: '/code-habits',
            },
            {
              text: 'VS Code 配置指南',
              link: '/vscode-config-guide',
            },
            {
              text: '项目好坏评价标准',
              link: '/project-score',
            },
            {
              text: '视频剪辑与发布经验',
              link: '/video-making',
            },
            {
              text: '各种工具比较',
              link: '/tools-comparison',
            },
          ],
        },
      ],
      'team-activities': [
        {
          text: '团队活动',
          base: '/team-activities',
          items: [
            {
              text: '灵感和头脑风暴',
              link: '/ideas-and-brainstorming',
            },
            {
              text: 'Minecraft 服务器',
              link: '/minecraft',
            },
          ],
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
      pattern: 'https://github.com/LiRenTech/docs/edit/master/:path',
    },
    lastUpdated: {
      text: '上次更新',
    },
    outline: {
      label: '目录',
    },
  },
  sitemap: {
    hostname: 'https://liren.zty012.de',
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  lastUpdated: true,
  head: [
    ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-N2C7X46VV5' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N2C7X46VV5');
    `,
    ],
  ],
});
