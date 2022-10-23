# JACK

> 基于 vue3.x+ element-plus2.x + typescript4.x 的后台管理系统模板

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/LRF1997/JACK.git
```

- 安装依赖

```bash
cd JACK

pnpm install

```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```

## 项目简要说明

`rootadmin` 默认开放多点登录，其他新建的账号默认都是单点登录。建议自己拉后端代码到本地跑，避免多人同时操作时产生冲突和误解。

### todolist

- [x] 项目初始化
- [ ] 登录页面
- [ ] 项目首页
- [ ] echarts大屏
- [ ] 其他...



## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `🎉feat` 增加新功能
  - `🧩fix` 修复问题/BUG
  - `🌈style` 代码风格相关无影响运行结果的
  - `🚀perf` 优化/性能提升
  - `💡refactor` 重构
  - `↩️revert` 撤销修改
  - `✏️docs` 文档/注释
  - `🔨chore` 依赖更新/脚手架配置修改等

### 🔨🔨🔨 项目功能

- 🚀 使用 Vue3.2 开发，单文件组件 `＜script setup＞`
- 🚀 整个项目集成了 TypeScript 
- 🚀 使用 Pinia🍍 替代 Vuex，轻量、简单、易用
- 待完善...