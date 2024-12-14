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
      'project-graph': [
        {
          text: 'Project Graph',
          link: '/project-graph/',
        },
        {
          text: '安装',
          link: '/project-graph/installation',
        },
        {
          text: '特性',
          base: '/project-graph/features',
          collapsed: false,
          items: [
            {
              text: '👀 视野',
              link: '/camera',
            },
            {
              text: '📦 节点',
              link: '/node',
            },
            {
              text: '↗️ 边',
              link: '/edge',
            },
            {
              text: '📷 图片',
              link: '/image',
            },
            {
              text: '🌲 节点树',
              link: '/tree',
            },
            {
              text: '⛰️ 质点',
              link: '/connect-point',
            },
            {
              text: '□ 框',
              link: '/section',
            },
            {
              text: '📄 导出',
              link: '/export',
            },
            {
              text: '🔗 链接节点',
              link: '/link-node',
            },
            {
              text: '⚡ 快速操作',
              link: '/quick-action',
            },
            {
              text: '🧩 文件拆分和合并',
              link: '/split-merge',
            },
            {
              text: '🧮 自动计算引擎',
              link: '/compute-engine',
            },
            {
              text: '🧠 AI',
              link: '/ai',
            },
          ],
        },
        {
          text: '为什么重写',
          link: '/project-graph/why-rewriting',
        },
        {
          text: '开发指南',
          link: '/project-graph/contributing',
        },
        {
          text: 'JSON 文档格式',
          link: '/project-graph/json-format',
        },
        {
          text: '常见问题',
          link: '/project-graph/faq',
        },
        {
          text: '用户协议',
          link: '/project-graph/terms',
        },
        {
          text: 'v1',
          base: '/project-graph/v1',
          collapsed: true,
          items: [
            {
              text: 'Project Graph v1',
              link: '/',
            },
            {
              text: '开发指南',
              link: '/contributing',
            },
          ],
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
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  lastUpdated: true,
});
