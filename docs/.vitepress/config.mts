import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '理刃科技开发团队文档',
  description: '理刃科技 LiRenTech 开发团队文档，包括各种编程语言的代码规范、风格描述、开发规范等各种细节',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/intro' },
      { text: '开发规范', link: '/code-standards/js-ts' },
    ],
    sidebar: [
      {
        text: '介绍',
        link: '/intro',
      },
      {
        text: '开发规范',
        items: [
          {
            text: 'JS/TS',
            link: '/code-standards/js-ts',
          },
          {
            text: 'Python',
            link: '/code-standards/python',
          },
          {
            text: 'HTML',
            link: '/code-standards/html',
          },
          {
            text: '命名',
            link: '/code-standards/naming',
          },
          {
            text: 'Git',
            link: '/code-standards/git',
          },
        ],
      },
    ],
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
});
