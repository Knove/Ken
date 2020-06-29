# 背景

浏览器插件，功能强大，用户众多。

尤其是 AE 所在的国际化场景里，插件用户更是相当可观，单单针对其中一个竞品：`亚马逊助手` 谷歌浏览器插件，就有近千万的装机量。

插件相对于传统的网站来说，有一个更高层级的视角，可以实现跨站，以浏览器级别实现业务功能，这无疑是一个更大的舞台，在现在使用者越来越多，业务需求越来越复杂的情况下，占住这块领域非常重要。

针对上面这些点，AE 要实现一系列或大或小的浏览器插件相关业务需求。而浏览器插件这个领域国内包括集团内部还是相对落后，所以 AE 技术流量团队构建实践出了一个浏览器插件工程化最佳实践 `Ken` ，结合集团内部的一些技术方案，来方便快捷完成或大或小的各种业务。以脚手架的方式来快速创建项目，快速迭代开发。

# 特性

- 🍔 技术栈：`React & TypeScript & Redux`，现代前端工程化开发模式，让你从开发 `SPA` 无缝切换到 `chrome` 扩展开发
- 🔥 热更新，自动重载 `content scripts`，自动化刷新注入页面，开发体验丝般顺滑
- ⚒️ ​ 自带 `webpack` 相关打包优化配置，集成若干插件，优化开发构建打包流程。
- 🦁 封装集团内部若干技术体系，如`美杜莎`、`Aplus`等，接入配置的坑，都帮你踩过了！

# 架构设计

![image.png](https://ata2-img.oss-cn-zhangjiakou.aliyuncs.com/e19bf86c2ca103f58cbe5ecace6ec701.png)
结构目录：

```
	.
	├── extension
	├── public
    ├── server
	└── src
	    ├── background
	    ├── contents/all
        ├── i18n
        ├── inject
        ├── options
        ├── popup
	        ├── page
	        ├── store
            └── index.tsx
        ├── manifest.dev.json
	    └── manifest.prod.json

```

#### extension

打包出来的 扩展包 文件夹，可以直接在浏览器扩展引入使用。

#### public

公共资源文件夹，其中的文件构建时会被打包入 `extension` 文件夹中，可以在代码中引用资源文件。

#### server

一般不必关注，webpack server 文件夹，其中有 `webpack` 配置，和相关热更新封装，提升开发体验。

#### background

插件的 background 页，构建时候会打包成 background.js

#### contents

页面注入脚本，可以在 `manifest` 配置注入页面

#### i18n

国际化，已经集成了美杜莎，可以在 `src/background/utils.ts` 中切换美杜莎的 CDN 地址，并且已经在 popup 写好 demo。

#### inject

注入 js 脚本，完全注入进页面的 js 段

#### options，popup

插件页面，可以 `React SPA` 方式开发，技术栈是 react + redux ，已经集成好路由，并写了个小例子~

#### manifest.json

配置 `JSON`，谷歌插件的配置文件，相关配置可以查看 [LINK](https://developer.chrome.com/extensions/manifest)

# 核心功能

### 优化

- 合理的项目结构设计，让你即使没没有接触过插件开发也能直接上手
- 集成了若干优秀的社区 webpack 打包插件和配置项，提供打包的优化，不用担心打包体积问题
- 集成了集团内部的技术体系，以及多个常用工具库，方便使用

### 热更新

Ken 会扫描 `src/contents` 文件夹并实现注入代码的热更新，也会热更新 popup 等页面，并提供 webpack 的 devserver 来进行 react 等代码相关的热更新， All Hot Reload！

### content scripts

Ken 会自动将 contents 下的文件夹打包成若干 js，通过配置 manifest 来实现多页面分别注入

如果 contents 下有个 `discuss` 文件夹例子：

```javascript
"content_scripts": [
    {
        "matches": ["https://www.example.com/discuss*"],
        "css": ["css/discuss.css"],
        "js": ["js/discuss.js"]
    }
],
```

# 开始

目前已集成入 `bell` 脚手架，选择 Extension 开发即可

```shell
def init bell
```

如果 `bell` 没有（可能版本不对），也可以直接 `git clone` 下来脚手架

```shell
git clone http://gitlab.alibaba-inc.com/ae-traffic-kn/ken.git
```

# 调试

开启调试服务：

```shell
tnpm start
```

1. 在谷歌浏览器 `chrome://extensions/`(扩展程序) 页面，右上角打开 `开发者模式`
2. 左上角选择 `加载已解压的扩展程序` ，选择项目内的 `extension` 文件夹

![image.png](https://ata2-img.oss-cn-zhangjiakou.aliyuncs.com/bcff993afb588b179af75a26b1db8c04.png)

`Enjoy it！` 超爽的开发体验

# 发布

打出生产包

```shell
tnpm run build
```

在谷歌浏览器开发者市场 [开发者后台](https://chrome.google.com/webstore/devconsole) 页面，上传打出的生产包

![image.png](https://ata2-img.oss-cn-zhangjiakou.aliyuncs.com/1bf3e43c0c5e30dbcedc5748bff2c11d.png)

# 总结

模板就要力求干净好用，干净就是随起随开 `cover` 大部分的场景又不冗余。好用就是开发体验满分，也无需关注打包。

插件市场起步不久，市面上很多插件都很基础(很原始的开发方式)，包括阿里内部也没有相关的沉淀，Ken 的诞生也是来填补下这部分的空白，用现代化的传统前端开发体验来进行插件的开发，也能让之前没接触过插件开发的小伙伴快速入手，无痛接入。

Ken 也在更加完善的路上~ 一些优化体验，优化开发的配置和封装也在 `ken/server` 内，大家有兴趣可以看看，欢迎给 Ken 提 ISSUE 或者 MR！有任何问题也可以直接找我 @谑风

这也是我第一篇 ATA 文章，如果能帮到各位，感觉还好用，真心求赞~ 3ks！！
