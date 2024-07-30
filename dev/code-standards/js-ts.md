# JS/TS 开发规范

以 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 为基础：

## 代码

- 2 空格缩进
- 代码宽度 140 字符
- LF 结尾
- 可以在注释上面用字符画图：这里推荐一个字符画的：[ASCIIFlow](https://asciiflow.com/#/)

## 类型

定义接口使用 `type` 关键字，而不是 `interface`，方便添加 `Optional` 等泛型约束。

```typescript
type User = A<{
  id: number;
  name: string;
  age?: number;
}>;
```
