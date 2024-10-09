# Project Graph v2 (基于 Tauri v2)

[![GitHub Release](https://img.shields.io/github/v/release/LiRenTech/project-graph)](https://github.com/LiRenTech/project-graph/releases/latest)
[![Nightly Buld](https://github.com/LiRenTech/project-graph/actions/workflows/nightly.yml/badge.svg)](https://github.com/LiRenTech/project-graph/actions/workflows/publish.yml)
[![Release](https://github.com/LiRenTech/project-graph/actions/workflows/release.yml/badge.svg)](https://github.com/LiRenTech/project-graph/actions/workflows/publish.yml)

## 系统要求

### Android

- Android 7.0+ (Nougat, API 24)
- Android System WebView 4.4.3+

### Windows

- Windows 7+
- Microsoft Edge WebView2 90+

### Linux

- webkit2gtk-4.1 2.44.4

## 安装

### 卸载可能存在的 v1 版本

```bash
sudo rm -rf /tmp/project-graph* /usr/local/bin/project-graph /usr/share/applications/project-graph.desktop /usr/share/icons/hicolor/64x64/apps/project-graph.png
```

### Arch Linux

从 AUR 安装

- [版本可能过时] project-graph ![AUR Version](https://img.shields.io/aur/version/project-graph?cacheSeconds=0)
- [推荐, 需要 Rust 环境] project-graph-git ![AUR Version](https://img.shields.io/aur/version/project-graph-git?cacheSeconds=0)

### Windows / MacOS / Debian

- 打开 [GitHub Release](https://github.com/LiRenTech/project-graph/releases/latest)
- Nightly Build 是开发版本，可能存在一些问题，Release 是稳定版，推荐使用
- 选择系统对应的安装包下载

| 系统               | 文件名                          |
| ------------------ | ------------------------------- |
| MacOS (M 系列芯片) | Project.Graph_xxx_aarch64.dmg   |
| Macos (Intel 芯片) | Project.Graph_xxx_x64.dmg       |
| Debian (x64)       | Project.Graph_xxx_amd64.deb     |
| Windows (x64)      | Project.Graph_xxx_x64-setup.exe |
