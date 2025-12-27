# React Native 清洁架构

<p align="center">
<img src="./assets/images/react-native-clean-architecture.png?raw=true" style="max-width: 100%; width: 600px;" />
</p>
<p align="center" style="margin-top: 10px;">一个<b>React Native 脚手架</b>，采用易于理解的清洁架构。</p>

## 功能特性

- 🚀 [Expo 52](https://expo.dev/)
- 📁 清洁架构。分层文件结构
- 🛡️ TypeScript 强类型保护
- 🖌️ 代码格式化：[ESLint](https://eslint.org/)
- 🖌️ 提交格式：[CommitLint](https://commitlint.js.org)
- 🐩 Git 钩子：[Husky](https://www.npmjs.com/package/husky)
- 💉 依赖注入：[Inversiland](https://github.com/inversiland/inversiland)
- 🌍 国际化：[expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) + [i18n-js](https://www.npmjs.com/package/i18n-js)
- 🚢 导航：[@react-navigation/native](https://reactnavigation.org/docs/getting-started)
- 🧰 状态管理：[Mobx](https://mobx.js.org/)

<hr>

## 📁 项目文件结构

> ⚠️ 在我看来，实现清洁架构概念的难点在于，由于它在理论上是定义的，每个人都可能使用不同的术语来实现它，或者省略/添加一些层或组件来简化或继续使其更复杂。

因此，我认为重要的是强调伴随架构的文档，以避免与其他将使用此系统的人产生障碍。

我简要解释了 /src 文件夹中组成清洁架构的四个层：

```
└── /src
    ├── AppModule.ts               # 依赖注入根模块
    ├── /core                      # 核心限界上下文
    │   └── /presentation
    └── /post                      # Post 限界上下文
        ├── /domain
        ├── /application
        ├── /infrastructure
        └── /presentation
```

### Domain（领域层）

此层包含所有企业业务规则：实体、规范等。

### Application（应用层）

此层包含限界上下文的用例。

### Infrastructure（基础设施层）

此层包含领域层的技术细节（实现）和第三方集成。

### Presentation（展示层）

此层包含 React Native 源代码：视图和控制器（Redux Thunks）。

### 参考资源

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/

<hr>

## 环境配置

Expo CLI 按照[标准 .env 文件解析](https://github.com/bkeepers/dotenv/blob/c6e583a/README.md#what-other-env-files-can-i-use)加载 .env 文件，然后将代码中所有对 `process.env.EXPO_PUBLIC_[VARNAME]` 的引用替换为 .env 文件中设置的相应值。出于安全考虑，node_modules 内的代码不受影响。

### 开发环境

在项目根目录创建 `.env` 文件用于开发：

```
EXPO_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

### 生产环境

使用要在生产环境中使用的环境变量配置 `.env.production` 文件。

## 运行

开发

```bash
yarn dev
```

网页

```bash
yarn web
```

Android

```bash
yarn android
```

iOS

```bash
yarn ios
```

<hr>

## 从 Expo 中导出

```bash
expo eject
```

<hr>

## 支持这个项目

<p align="center">☕️ 买我一杯咖啡，让开源派对永不结束。</p>

<p align="center"><a href="https://www.buymeacoffee.com/carlossala95" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a></p>

<p align="center">
  <a href="https://www.youtube.com/channel/UCC-EUKPStBfQ1nEIvSl6bAQ" target="_blank">YouTube</a> |
  <a href="https://instagram.com/carlossalasamper" target="_blank">Instagram</a> |
  <a href="https://twitter.com/carlossala95" target="_blank">Twitter</a> |
  <a href="https://facebook.com/carlossala95" target="_blank">Facebook</a>
</p>
<p align="center">
  <a href="https://godofprogramming.com" target="_blank">godofprogramming.com</a>
</p>
