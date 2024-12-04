# 贡献指南

请自行安装 `nonemoji` 工具，并使用 `nonemoji commit` 提交更改

## 项目结构

```plain
.
├── src
│   ├── components 组件
│   │   └── ui UI 组件
│   ├── core 核心代码
│   ├── pages 页面
│   │   ├── _app.tsx 应用布局
│   ├── types 类型定义
│   ├── utils 工具函数
└── src-tauri
    ├── build.rs
    ├── capabilities
    │   └── default.json 定义前端的权限
    ├── Cargo.lock
    ├── Cargo.toml
    ├── gen
    │   └── android 此目录是一个 Android 项目，可以使用 Android Studio 打开
    ├── icons 应用图标
    ├── src 后端代码
    │   ├── lib.rs
    │   └── main.rs
    └── tauri.conf.json Tauri 配置文件
```

## 运行项目

1. 安装 Rust 工具链，参考 [Rust 官方文档](https://www.rust-lang.org/tools/install)
2. 安装 `pnpm`，参考 [pnpm 官方文档](https://pnpm.io/installation)
3. 安装依赖：`pnpm install`
4. 启动项目
   - 桌面版：`pnpm tauri dev`
   - Android 版：`pnpm tauri android dev`

## 构建项目

1. 桌面版：`pnpm tauri build`
2. Android 版：`pnpm tauri android build`

> [!TIP]
> 构建 Android 版需要配置应用签名，详见 [Android 应用开发](/dev/cross-platform/android)
