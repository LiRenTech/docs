# 理刃科技团队js/ts代码规范

使用prettierrc格式化前端代码。每次提交前用 `pnpm format` 类似的命令全盘格式化代码，如果忘了可以单独commit一个格式化代码的提交。



```js
{
  "printWidth": 120, // 指定行的最大长度
  "tabWidth": 2, // 指定缩进的空格数
  "useTabs": false, // 是否使用制表符进行缩进，默认为 false
  "singleQuote": false, // 是否使用单引号，默认为 false
  "quoteProps": "as-needed", // 对象属性是否使用引号，默认为 "as-needed"
  "trailingComma": "none", // 是否使用尾随逗号（末尾的逗号），可以是 "none"、"es5"、"all" 三个选项
  "bracketSpacing": true, // 对象字面量中的括号是否有空格，默认为 true
  "jsxBracketSameLine": false, // JSX 标签的右括号是否与前一行的末尾对齐，默认为 false
  "arrowParens": "always", // 箭头函数参数是否使用圆括号，默认为 "always"
  "rangeStart": 0, // 指定格式化的范围的起始位置
  "requirePragma": false, // 是否需要在文件顶部添加特殊的注释才能进行格式化，默认为 false
  "insertPragma": false, // 是否在格式化后的文件顶部插入特殊的注释，默认为 false
  "proseWrap": "preserve", // 是否保留 markdown 文件中的换行符，默认为 "preserve"
  "htmlWhitespaceSensitivity": "ignore", // 指定 HTML 文件中空格敏感度的配置选项，可以是 "css"、"strict"、ignore
  "vueIndentScriptAndStyle": false, // 是否缩进 Vue 文件中的 <script> 和 <style> 标签，默认为 false
  "endOfLine": "auto", // 指定换行符的风格，可以是 "auto"、"lf"、"crlf"、"cr" 四个选项
  "semi": true, // 行末是否添加分号，默认为 true
  "usePrettierrc": true, // 是否使用项目根目录下的 .prettierrc 文件，默认为 true
  "overrides": [ // 针对特定文件或文件类型的格式化配置
    {
      "files": "*.json", // 匹配的文件或文件类型
      "options": {
        "tabWidth": 4 // 针对该文件类型的配置选项
      }
    },
    {
      "files": "*.md",
      "options": {
        "printWidth": 100
      }
    }
  ]
}



```

对一些参数的解释

一行120个稍微高了点，主要是因为tailwindcss太香了，所以适当宽松一些。

缩进嵌套可太多了，如果还是四空格缩进就太爆炸了，所以必须两个字符。

行末还是要遵循传统，添加分号，因为有个别时候以中括号结尾，下一行又是一个闭包函数，就废了，会强行连在一起导致出错。

```js
const a = xxx[12]
(function() {
	...
})()
```



"endOfLine": "auto"，统一windows开发和linux开发的问题。



