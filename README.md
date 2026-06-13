# 个人作品集网站

一个基于 Next.js 14 的现代化作品集网站，采用深色主题设计，参考 OpenAI Codex 风格。

## 技术栈

- **框架**: Next.js 14.1.0
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
npm run build
```

## 项目结构

```
/
├── pages/              # 页面文件
│   ├── index.tsx       # 首页
│   └── _app.tsx        # 应用入口
├── components/         # React 组件
│   ├── Navbar.tsx      # 导航栏
│   ├── Hero.tsx        # 首页Hero区域
│   ├── Projects.tsx    # 作品展示
│   ├── About.tsx       # 关于我
│   ├── Contact.tsx     # 联系方式
│   └── Footer.tsx      # 页脚
├── styles/             # 样式文件
│   └── globals.css     # 全局样式
├── package.json        # 项目依赖
├── tailwind.config.js  # Tailwind配置
└── next.config.js      # Next.js配置
```

## 功能特性

- ✨ 深色主题 + 渐变光晕效果
- 🎨 流畅的页面动画
- 📱 完全响应式设计
- 🚀 快速部署到 Vercel
- ⚡ 服务端渲染

## 部署到 Vercel

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 点击 Deploy

Vercel 会自动检测 Next.js 项目并配置好一切。

## 自定义

### 修改个人信息

编辑以下文件来自定义内容：

- `components/Hero.tsx` - 首页介绍
- `components/Projects.tsx` - 项目案例
- `components/About.tsx` - 个人技能和经历
- `components/Contact.tsx` - 联系信息

### 修改配色

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
colors: {
  accent: {
    500: '#8b5cf6',  // 主色调
    400: '#a78bfa',
  },
  cyan: {
    500: '#06b6d4',  // 辅助色
    400: '#22d3ee',
  },
}
```

## 许可证

MIT License - 欢迎使用！
