# JS/TS 开发规范

## 代码

- 2 空格缩进
- 代码宽度 140 字符
- LF 结尾
- 可以在注释上面用字符画图：这里推荐一个字符画的：[ASCIIFlow](https://asciiflow.com/#/)

## 禁止使用浏览器原生弹窗

禁止使用浏览器原生弹窗，例如 alert、confirm、prompt。

这些函数会造成页面堵塞，并且 UI 不好看，用户体验差。

目前大部分项目都有自己的弹窗组件，可以考虑使用。

## 命名

命名尽量简短:

```
pressedKey -> key
onMouseClick -> onClick
```
