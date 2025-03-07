# Godot 游戏开发规范

参考 [官方示例项目github仓库](https://github.com/godotengine/godot-demo-projects)

## 代码中的规范

基本大部分和Python保持一致，基本是蛇底式，也是用下划线开头表示私有化。

但有一些需要注意的地方：

缩进是制表符，不是空格。

### 常量

```gdscript
const CELL_SIZE = Vector2i(64, 64)
const MASS: float = 10.0
const ARRIVE_DISTANCE: float = 10.0
```

若表示一个具体的数值，全大写。（向量可看成数值，在Godot中是不可变类型）

```gdscript
const PathFindAStar = preload("./pathfind_astar.gd")
```

如果是动态加载的模块，大驼峰。

来自官方 `... with AStarGrid2D` 项目

### 函数

函数名不一定要绝对使用小写+下划线，在信号绑定函数中可以混入大驼峰，并且要以下划线开头，例如：

```gdscript
_on_StartButton_pressed():
	pass
```

上述代码来自官方项目 `Doge the Creeps` 中的 `hud.gd` 文件。混入的大驼峰 `StartButton` 实际上是节点名，因为节点名是大驼峰

### 枚举/状态

```gdscript
const States = {
	IDLE = "idle",
	WALK = "walk",
	RUN = "run",
	FLY = "fly",
	FALL = "fall",
}
```

表示状态可以用全大写，来自官方 `Skeleton2D Demo` 项目

```gdscript
enum Tile {
	OBSTACLE,
	START_POINT,
	END_POINT,
}
```

来自官方 `... with AStarGrid2D` 项目

## 场景节点名

大驼峰命名法。因为默认创建的节点都是大驼峰，如 `Node2D`

> 官方项目中存在大驼峰与蛇底式混用的情况，如 `CameraLimit_min`，感觉还是统一大驼峰更好。

## 文件名

统一用小写字母+下划线。包括材质、着色器等资源

```
level_01.tscn
player_character.gd
icon_health.png,  bg_forest.jpg
player_walk_01.png
background_1920x1080.png

res://materials/water_ripple.tres
res://shaders/pixelate.gdshader
```

## 文件夹名

同文件名。统一使用小写字母+下划线。

## 项目文件夹名

要在github仓库名称保持统一，小写字母加短横线

## Godot内置项目名

采用 英文大标题 格式：大写每个单词首字母 + 空格 + 介词小写

注意这个和项目文件夹名不一样。这里的项目名在初始化的时候设置。用于在Godot的项目列表中显示。

> 官方仓库中给的是传统英文文章大标题格式，
> 
> 如 `Doge the Creeps`、`Physics-Based Platformer 2D`
> 
> 大写字母开头，有时候会有连字符，遇到介词还会变成小写。比如 `for the with and`


## 文件组织结构

文件夹根目录下必有 `icon.webp` 图标文件。

具体文件夹结构可以根据项目大小灵活决定

> 官方项目：`Physics-Based Platformer 2D`，给出的结构中，图片、gd、tscn文件都被分散在各个游戏要素文件夹中，但音效却单独放在 `audio` 文件夹中。
> 
> 而在官方项目 `Doge the Creeps` 中，图片和音频又统一放在 `art` 文件夹下。


## 其他细节命名

全局键位映射设置中的自定义动作名：小写加下划线，如：`press_space`, `mouse_wheel_up`

节点组名称：小写加下划线，但建议要以 `_group` 结尾，如：`player_character_group`, `enemy_group`, `bullet_group`

自定义信号名：小写加下划线，但建议要以 `_signal` 结尾，如：`player_hit_signal`, `enemy_die_signal`, `game_over_signal`

动画播放器中的动画片段命名：小写加下划线，但建议要以 `_anim` 结尾，如：`player_idle_anim`, `enemy_walk_anim`

节点附加的元数据标签：（如Area2D的碰撞标签），建议后缀 "_tag" 区分组和标签，如：`player_character_tag`, `enemy_tag`, `bullet_tag`

通知常量：建议后缀 "_notification" 如：`game_over_notification`, `enemy_hit_notification`

后面可能会随着学习的深入，有更多的细节命名规范，发生改动时，需要互相告知变动

## git忽略文件模板

适用于 godot4.3 版本

```gitignore
.godot/
# 资源导入后的缓存（必须忽略！）
.import/
# 旧版导出配置（Godot 3.x）
export.cfg
# 包含导出密钥等敏感信息（建议忽略！）
export_presets.cfg

dist/

*.tmp

.vscode/
```