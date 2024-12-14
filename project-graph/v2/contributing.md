# 贡献指南

## 如何让源代码运行起来？

```sh
pnpm install
pnpm tauri dev
```

还需要配置Rust环境。

注意：请确保已安装 Rust 和 Node.js 环境。windows还需安装c++编译工具，具体详见

```
https://littlefean.github.io/2024/09/28/tauri%E9%A1%B9%E7%9B%AE%E5%9C%A8windows%E4%B8%8A%E7%9A%84%E5%BC%80%E5%8F%91%E8%B8%A9%E5%9D%91/
```

## MacOs 环境下开发

目前由于开发者无MacOs设备，无法测试，如果您是mac用户，可以将 `src-tauri/tauri.conf.json` 中的项进行以下修改后再打包：

```json
  "app": {
    "windows": [
      {
        "title": "Project Graph",
        "width": 1200,
        "height": 800,
        "decorations": true,  // 修改
        "transparent": false,  // 修改
        "visible": false,  // 添加此项
        "dragDropEnabled": false
      }
    ],
    "macOSPrivateApi": true,  // 添加此项
    "security": {
      "csp": null,
      "capabilities": []
    }
  },
```

## 开发注意事项

若发现修改代码后无法热更新或者出现诡异bug，用ctrl+shift+i进入DevTools控制台后，在控制台窗口激活的情况下，按 Ctrl+Shift+R 刷新（因为窗口屏蔽了Ctrl+Shift+R快捷键，但无法屏蔽F5刷新和ctrl+shift+i等特殊的快捷键）注：F5刷新和Ctrl+Shift+R刷新不一样，F5不会刷掉缓存，Ctrl+Shift+R会刷掉缓存。

## 打包可执行文件

```
pnpm tauri build
```

如果是windows，可能还会遇到网络问题

```
https://github.com/tauri-apps/tauri/issues/7338
```

详见上述情况解决