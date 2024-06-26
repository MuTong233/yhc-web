<!-- markdownlint-disable MD041 MD045 -->
<p align="center">
  <img src="./src/.vuepress/public/logo.png">
</p>

# Yuyuko's Hidden Cup (YHC) 归档网站

中文文档 ｜ [English](./README_EN.md)

Yuyuko‘s Hidden Cup *（以下简称 YHC ）* 是音乐节奏游戏 [osu!](https://osu.ppy.sh) 中的一个社区比赛，由玩家 [SIyuyuko](https://osu.ppy.sh/users/9794030) 主办。

本归档网站则是记录、整理每届 YHC 内容，包括图池、参赛选手、赛后总结等。

你可以进入[网站](https://siyuyuko.github.io/yhc-web/)全览比赛主要信息，也可以通过整理归档的源表格了解每届比赛详情。

## 组成

### 文档

`文档` 部分集合了比赛基本内容，包括介绍、规则、图池等。

### 归档

`归档` 部分记录了每届 YHC 的赛程、图池、比赛主表格等。

### 回忆

`回忆` 部分收集了参赛选手比赛期间留下的足迹，分为 `合照` 、 `梗图` 两个板块。

- `合照` 板块存放队伍 Collab ， 通常为玩家自发组织参与。

- `梗图` 板块存放有意思的图片，如表情包、群聊截图、比赛动图等。

### 关于

`关于` 部分介绍了比赛工作人员，以及提供网站反馈渠道。

## 特色

- 网站样式与比赛主题同步，定期更换

- 提供比赛倒计时组件，可根据开赛时间按需引入

- 图池基于组件渲染生成，支持以下交互功能
  - [x] 打开指定谱面官网
  - [x] 复制谱面ID
  - [x] 直接下载谱面文件
  
  ……

## 贡献指南

感谢你为网站作出的贡献与提议，所有的提议将会在讨论可行性后得到实装。

### 开发环境

- Node.js ≥ 20.12.1

### 运行步骤

- 克隆项目仓库到本地

- 编辑器打开文件夹，在终端中输入指令下载依赖

```bash
npm install
```

- 然后输入指令运行项目

```bash
npm run docs:dev
```

当终端中出现如下内容时，表示运行成功，点击网址即可在浏览器中查看网站

```bash
  vite v5.2.10 dev server running at:

  ➜  Local:   http://localhost:5173/yhc-web/
  ➜  Network: http://xxxx:5173/yhc-web/
```
