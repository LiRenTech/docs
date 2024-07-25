# 理刃科技团队Python代码规范

## 原则

按照PEP8规范来，此文档只对一些特殊情况做说明。

## 篇幅

横向长度八十个字符

## 字符串

字符串优先用双引号，遇到嵌套问题时才考虑单引号等。

插入值不要再用老的写法了 

```python
x = "%s, %s!" % (imperative, expletive)
```

用3.7的

```python
string = f"{a}"
```





## 关键字

关于 `...` 和 `pass` ：

... 仅在自定义的pyi文件里的类型提示中出现，平时使用pass。

## 引入语句

在不考虑打包成exe的项目，仅对包和模块使用语句，而不对单个类型、类或函数使用 `import` 语句。

考虑打包成exe的项目，引入时尽量引入少的部分。



## 注释风格

注释应该设想未来N个月后的自己能很快速的看懂，所以要描述清晰一些。

但注释层面应该描述意图，不要描述过于详细的代码细节

多行注释第一行三个引号后面不立刻接东西，而是换行再写东西，这样在垂直方向上看起来更对称一些。感觉更舒服一些。（这和google规范不一样，google可能觉得这样在生成的时候不会在首部多一个空行，但Littlefean认为生成文档注释的概率很小，平时浏览代码的时间很长，应该更加注重代码浏览体验。）

```python
"""google
xxx xxx
xxx xxx
"""
```



可以在注释上面用字符画图：这里推荐一个字符画的：[ASCIIFlow](https://asciiflow.com/#/)

```python
"""
                                            
 ┌────────┬──────────────────┐ ▲            
 │        │                  │ │            
 │   ┌┐   │                  │ │barrelWidth 
 │   └┘   │                  │ │            
 │        │                  │ │            
 └────────┴──────────────────┘ ▼            
                                            
 ◄───────barrelLength────────►              
                                            
"""
```

例如上图就用字符画标注了一个内容。非常直观，上面是一个塔防游戏中的炮管宽度和长度具体指代了什么一目了然。



函数注释，等多行注释皆用双引号，因为单引号在Pycharm里会出现警告。

```python
def paint_folder_rect(paint: QPainter, camera: Camera, entity_file: EntityFolder):
    """
    
    :param paint: 
    :param camera: 
    :param entity_file: 
    :return: 
    """
```



特殊标记

TODO

```
TODO: XXXX
```

大写的TODO加一个英文冒号再加一个空格，这样万无一失。vscode有一个TODO高亮插件也能显示出来。pycharm显示的原理是不管大写小写，TODO和FIXME都会变色。

其他标记

```
BUG: 这个有bug，和fixme的区别是，不是很严重的bug，不用着急修复
HACK: 有安全性问题和隐患。
FIXME: 很严重的bug，需要着急修复
[ ]: 复选框未选择状态
[x]: 复选框选择状态
```



## 函数

参数太多的情况

```python
def paint_rect_in_world(paint: QPainter,
                        camera: Camera,
                        rect: Rectangle,
                        fill_color: QColor,
                        stroke_color: QColor
                        ):
    PainterUtils.paint_rect_from_left_top(
        paint,
        camera.location_world2view(rect.location_left_top),
        rect.width * camera.current_scale,
        rect.height * camera.current_scale,
        fill_color,
        stroke_color
    )
```

像上面一样换行。



类型注解导致的循环依赖

这个问题待解决，目前可以采用google的方法

```python
from typing import Any

some_mod = Any  # some_mod.py imports this module.
...

def my_method(self, var: "some_mod.SomeType") -> None:
	...
```



## 类与面向对象

声明一个类别再继承 object 了。截至目前为止至今还未遇到问题。



类的方法没有使用到self参数时必须把类修饰成静态方法。否则Pycharm编辑器会有警告，同时也能提醒其他浏览代码的人这个函数里没有使用到实例身上的东西。



在Python中, 对于琐碎又不太重要的访问函数, 你应该直接使用公有变量来取代它们, 这样可以避免额外的函数调用开销. 当添加更多功能时, 你可以用属性(property)来保持语法的一致性。这是Pythonic哲学，和java不一样。



[风格指南 |Google 发起的开源项目的风格指南 --- styleguide | Style guides for Google-originated open-source projects](https://google.github.io/styleguide/pyguide.html)



