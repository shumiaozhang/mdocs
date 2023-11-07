import{_ as s,o as a,c as n,U as e}from"./chunks/framework.adbdbaa5.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/node/express.md","filePath":"js/node/express.md"}'),l={name:"js/node/express.md"},p=e(`<p>Express 是目前最流行的基于 Node.js 的 Web 开发框架，可以快速地搭建一个完整功能的网站。 Express Generator 是 Express 的应用程序生成器工具，使用它可以快速建立完整的项目文件目录。</p><h2 id="_1-首先需要有node环境支持npm" tabindex="-1">1. 首先需要有node环境支持npm <a class="header-anchor" href="#_1-首先需要有node环境支持npm" aria-label="Permalink to &quot;1. 首先需要有node环境支持npm&quot;">​</a></h2><h2 id="_2-全局安装-express-generator" tabindex="-1">2. 全局安装 express-generator <a class="header-anchor" href="#_2-全局安装-express-generator" aria-label="Permalink to &quot;2. 全局安装 express-generator&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i express-generator -g</span></span></code></pre></div><h2 id="_3-初始化项目" tabindex="-1">3. 初始化项目 <a class="header-anchor" href="#_3-初始化项目" aria-label="Permalink to &quot;3. 初始化项目&quot;">​</a></h2><p>创建一个名称为<code>myapp</code>的express项目</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">express myapp</span></span></code></pre></div><p>目录结构</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── app.js</span></span>
<span class="line"><span style="color:#A6ACCD;">├── bin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── www</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── public</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── images</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── javascripts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── stylesheets</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── style.css</span></span>
<span class="line"><span style="color:#A6ACCD;">├── routes</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── users.js</span></span>
<span class="line"><span style="color:#A6ACCD;">|--- modles</span></span>
<span class="line"><span style="color:#A6ACCD;">|--- docs</span></span>
<span class="line"><span style="color:#A6ACCD;">|--- utils</span></span>
<span class="line"><span style="color:#A6ACCD;">└── views</span></span>
<span class="line"><span style="color:#A6ACCD;">	├── error.jade</span></span>
<span class="line"><span style="color:#A6ACCD;">	├── index.jade</span></span>
<span class="line"><span style="color:#A6ACCD;">	└── layout.jade</span></span></code></pre></div><ul><li><p>app.js 是项目的主文件（入口文件），相当于vue项目的main.js</p></li><li><p>bin: 启动目录 里面包含了一个启动文件，bin/www 一个启动文件,配置了项目运行的端口信息 默认监听端口是 3000</p></li><li><p>package.json 包描述文件</p></li><li><p>public: 所有的前端静态资源 html css image js</p></li><li><p>views: 主要放置 ejs 后端模板文件, 一般不需要使用</p></li><li><p>routes: 放的是路由文件 (默认有两个)，主要在这个目录下开发接口,路由主要定义url和资源的映射关系 ( 一一对应关系 ), 主要用来接收前端发送的请求 响应数据给前端</p></li><li><p>modles: 查询数据库语句，将查询后的结果返回routes中对应的方法</p></li><li><p>docs: 存放一些对项目的介绍，比如sql文件，接口文档等<code>.md</code>文件</p></li><li><p>utils: 存放一些自定义函数</p></li></ul><h2 id="_4-进入目录并安装包" tabindex="-1">4. 进入目录并安装包 <a class="header-anchor" href="#_4-进入目录并安装包" aria-label="Permalink to &quot;4. 进入目录并安装包&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd myapp</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i</span></span></code></pre></div><h2 id="_5-启动项目" tabindex="-1">5. 启动项目 <a class="header-anchor" href="#_5-启动项目" aria-label="Permalink to &quot;5. 启动项目&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm start</span></span></code></pre></div>`,14),o=[p];function t(c,i,r,d,C,A){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
