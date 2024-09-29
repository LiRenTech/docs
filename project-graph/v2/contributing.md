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

## 开发环境

推荐开发环境:

```plain
[✔] Environment
    - OS: Arch Linux Rolling Release x86_64 (X64)
    ✔ webkit2gtk-4.1: 2.44.4
    ✔ rsvg2: 2.59.0
    ✔ rustc: 1.81.0 (eeb90cda1 2024-09-04)
    ✔ cargo: 1.81.0 (2dbb1af80 2024-08-20)
    ✔ rustup: 1.27.1 (2024-05-07)
    ✔ Rust toolchain: stable-x86_64-unknown-linux-gnu (default)
    - node: 20.17.0
    - pnpm: 9.8.0
    - npm: 10.8.2
```

> [!TIP]
> 如果使用 Arch Linux，需要把 `webkit2gtk-4.1` 降级到 `2.44.4`，否则会导致无法显示窗口

## 运行项目

1. 安装 Rust 工具链，参考 [Rust 官方文档](https://www.rust-lang.org/tools/install)
2. 安装 `pnpm`，参考 [pnpm 官方文档](https://pnpm.io/installation)
3. 安装依赖：`pnpm install`
4. 启动项目
5. 桌面版：`pnpm tauri dev`
6. Android 版：`pnpm tauri android dev`

## 编译项目

1. 桌面版：`pnpm tauri build`
2. Android 版：`pnpm tauri android build`

> [!TIP]
> 构建 Android 版需要配置应用签名，详见 [Android 应用开发](/dev/cross-platform/android)
