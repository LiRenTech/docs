# React

## 定义组件

- 始终使用函数式组件，并使用 `function` 而不是 `const` 定义组件。
- 对于有 `children` prop 的组件，props 类型定义使用 `React.PropsWithChildren`，如果有其他 props，使用 `React.PropsWithChildren<{ ... }>`。

## 样式

- 使用 Tailwind 或者 Emotion

## 状态管理

- 使用 Recoil

## 路由

- 使用 React Router
- 使用 generouted 自动生成路由

## 导出

- 文件里面用export class或者export namespace， 只有组件要用export default（如果用了exportdefault,导出的东西改名字了就难搞了）

## 命名

- components文件夹里面的文件名都是大驼峰

- pages文件夹里面的文件名都是_xxx_xxx.tsx

- 具体看generouted文档
