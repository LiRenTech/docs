# 常见问题

## Windows

### 无法在 Windows 7 上安装

我们不支持 Windows 7 系统，请升级到 Windows 10 或更高版本。

## Linux

### Arch Linux: 透明窗口

```bash
sudo pacman -S downgrade
sudo downgrade webkit2gtk-4.1
# 选择 2.44.4-1 版本，然后选择 IgnorePkg
```

### 缩放画面时文字抖动

> [Avoid floating-point coordinates and use integers instead](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas#avoid_floating-point_coordinates_and_use_integers_instead)

WebKit 目前不支持 Canvas 中的子像素渲染。

### 缩放到一定大小后节点消失

> Safari still can't handle canvas elements having more than 16777216 pixels. Safari simply cannot draw large canvas elements. The limit is set at 16.777. 216 pixels.

WebKit 目前不支持渲染超过 216px 的 Canvas 元素。
