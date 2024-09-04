# 贡献指南

1. 请自行安装 `nonemoji` 工具，然后使用 `nonemoji commit` 提交更改。

## 如何让源代码运行起来？

> [!TIP]
> 使用 Anaconda 安装 pipx 和 pdm 加入环境变量时需要重启 Anaconda 才能使用

```sh
# 安装 pipx
# 必须要用pipx安装pdm，不要用pip安装pdm，否则容易出问题，此项目是python3.12的
pip install pipx
# 安装 pdm
pipx install pdm
# 安装项目依赖
pdm install
# 运行项目
pdm start
```

### 如果是 Linux

运行项目后会问你是否修复 fcitx5，如果你使用的是 fcitx5 输入法，输入 `y` 以修复无法在应用中输入中文的问题。

当然你也可以不修复，使用系统的 PyQt5 库，也可以解决输入法问题。

#### Arch Linux

```sh
sudo pacman -S pyqt5
sudo rm -rf ./.venv/lib/python3.12/site-packages/PyQt5
sudo cp -r /usr/lib/python3.12/site-packages/PyQt5 ./.venv/lib/python3.12/site-packages/
```

#### Ubuntu

```sh
sudo apt-get install python3-pyqt5
sudo rm -rf ./.venv/lib/python3.12/site-packages/PyQt5
sudo cp -r /usr/lib/python3.12/site-packages/PyQt5 ./.venv/lib/python3.12/site-packages/
```

## 如何打包

启发来自于 b 站评论区

> 把内层 `project-graph-qt/src` 当成整个项目文件夹而不是 `project-graph-qt` 这个文件夹。（小天才）
>
> 即：用 pycharm 打开 src 文件夹

```bash
pdm install --with package
pdm package
```

这个命令会运行 `package.py`
