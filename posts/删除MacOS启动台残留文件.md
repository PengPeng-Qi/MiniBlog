---
date: "2022-09-25"
title: 删除启动台残留文件
description: 当我们卸载文件之后，启动图有时候会出现图标残留情况
---

## 解决方法

1. 打开根目录，随后前往 `/private/var/folders` 文件夹，随后在弹出的 Finder 中查找 `com.apple.dock.launchpad`，打开该文件可以看到有 db 文件夹。

2. 打开终端，打开 db 文件夹，随后输入命令 `sqlite3 db "delete from apps where title='Epic Games Launcher';"&&killall Dock`

> `Epic Games Launcher` 是需要删除图标的名字

3. 随后输入密码，如无其他错误就完成了 🎉

### 参考

- [删除启动台残留的图标](https://zhuanlan.zhihu.com/p/55866195)
