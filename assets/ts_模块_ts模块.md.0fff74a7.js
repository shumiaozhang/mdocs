import{_ as s,o,c as a,U as p}from"./chunks/framework.adbdbaa5.js";const C=JSON.parse('{"title":"1. ts模块简介","description":"","frontmatter":{},"headers":[],"relativePath":"ts/模块/ts模块.md","filePath":"ts/模块/ts模块.md"}'),l={name:"ts/模块/ts模块.md"},e=p(`<h1 id="_1-ts模块简介" tabindex="-1">1. ts模块简介 <a class="header-anchor" href="#_1-ts模块简介" aria-label="Permalink to &quot;1. ts模块简介&quot;">​</a></h1><p>如果一个文件包含import或export语句就是一个模块，相应地如果文件不包含export语句，就是一个全局的脚本文件。</p><p>模块本身就是一个作用域，不属于全局作用域。模块内部的变量、函数、类只在内部可见，对于模块外部是不可见的。暴露给外部的接口，必须使用exprot命令声明；如果一个文件要使用模块的接口，需要用import命令导入。</p><p>如果一个文件不包含export语句，但是希望把它当做一个模块，可以在脚本头部添加一行export语句，不会起到任何作用，就是将文件当做模块处理，代码变成了内部代码。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span></code></pre></div><p>ts支持ES6模块的语法，加载模块时可以省略模块文件的后缀名。</p><h1 id="_2-import-type语句" tabindex="-1">2. import type语句 <a class="header-anchor" href="#_2-import-type语句" aria-label="Permalink to &quot;2. import type语句&quot;">​</a></h1><p>import语句可以同时输入类型和正常的接口，但是这样不利于区分，ts提供了type关键字</p><p>方法一：在输入的类型前面加上type，表示导出的是一个类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>方法二：使用import type，表示这个语句只能输入类型，不能输入接口</p><pre><code>// 正确
import type { A } from &#39;./a&#39;;

// 报错
import type { a } from &#39;./a&#39;;
</code></pre><p>import type也可以输入默认类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> DefaultType </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">moduleA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>可以输入所有的类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> TypeNS </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">moduleA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>同样的，export也有两种方法导出类型</p><p>方法一：表示输出的是个类型</p><p>方法二：表示输出的都是类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">A</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 方法一</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 方法二</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">};</span></span></code></pre></div><h1 id="_3-importsnotusedasvalues编译设置" tabindex="-1">3. importsNotUsedAsValues编译设置 <a class="header-anchor" href="#_3-importsnotusedasvalues编译设置" aria-label="Permalink to &quot;3. importsNotUsedAsValues编译设置&quot;">​</a></h1><p>ts 特有的输入类型（type）的 import 语句，编译成 JavaScript 时怎么处理呢？</p><p>ts 提供了<code>importsNotUsedAsValues</code>编译设置项，有三个可能的值。</p><p>（1）<code>remove</code>：这是默认值，自动删除输入类型的 import 语句。</p><p>（2）<code>preserve</code>：保留输入类型的 import 语句。</p><p>（3）<code>error</code>：保留输入类型的 import 语句（与<code>preserve</code>相同），但是必须写成<code>import type</code>的形式，否则报错。</p><p>请看示例，下面是一个输入类型的 import 语句。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TypeA</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>上面示例中，<code>TypeA</code>是一个类型。</p><p><code>remove</code>的编译结果会将该语句删掉。</p><p><code>preserve</code>的编译结果会保留该语句，但会删掉其中涉及类型的部分。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>上面就是<code>preserve</code>的编译结果，可以看到编译后的<code>import</code>语句不从<code>a.js</code>输入任何接口（包括类型），但是会引发<code>a.js</code>的执行，因此会保留<code>a.js</code>里面的副作用。</p><p><code>error</code>的编译结果与<code>preserve</code>相同，但在编译过程中会报错，因为它要求输入类型的<code>import</code>语句必须写成<code>import type</code> 的形式。原始语句改成下面的形式，就不会报错。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TypeA</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h1 id="_4-commonjs模块" tabindex="-1">4. CommonJS模块 <a class="header-anchor" href="#_4-commonjs模块" aria-label="Permalink to &quot;4. CommonJS模块&quot;">​</a></h1><h2 id="_1-import-语句" tabindex="-1"> 1. import = 语句 <a class="header-anchor" href="#_1-import-语句" aria-label="Permalink to &quot;&amp;#x20;1. import = 语句&quot;">​</a></h2><p>ts 使用<code>import =</code>语句输入 CommonJS 模块。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> code </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFileSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>上面示例中，使用<code>import =</code>语句和<code>require()</code>命令输入了一个 CommonJS 模块。模块本身的用法跟 Node.js 是一样的。</p><p>除了使用<code>import =</code>语句，TypeScript 还允许使用<code>import * as [接口名] from &quot;模块文件&quot;</code>输入 CommonJS 模块。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_2-export-语句" tabindex="-1"> 2. export = 语句 <a class="header-anchor" href="#_2-export-语句" aria-label="Permalink to &quot;&amp;#x20;2. export = 语句&quot;">​</a></h2><p>ts 使用<code>export =</code>语句，输出 CommonJS 模块的对象，等同于 CommonJS 的<code>module.exports</code>对象。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><code>export =</code>语句输出的对象，只能使用<code>import =</code>语句加载。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 12</span></span></code></pre></div><h1 id="_5-模块定位" tabindex="-1">5. 模块定位 <a class="header-anchor" href="#_5-模块定位" aria-label="Permalink to &quot;5. 模块定位&quot;">​</a></h1><p>是一种算法，用来确定import语句和export语句里面的模块文件位置。</p><p>编译参数<code>moduleResolution</code>，用来指定具体使用哪一种定位算法。常用的算法有两种：<code>Classic</code>和<code>Node</code>。</p><p>如果没有指定<code>moduleResolution</code>，它的默认值与编译参数<code>module</code>有关。<code>module</code>设为<code>commonjs</code>时（项目脚本采用 CommonJS 模块格式），<code>moduleResolution</code>的默认值为<code>Node</code>，即采用 Node.js 的模块定位算法。其他情况下（<code>module</code>设为 es2015、 esnext、amd, system, umd 等等），就采用<code>Classic</code>定位算法。</p><h2 id="_1-相对模块、非相对模块" tabindex="-1"> 1. 相对模块、非相对模块 <a class="header-anchor" href="#_1-相对模块、非相对模块" aria-label="Permalink to &quot;&amp;#x20;1. 相对模块、非相对模块&quot;">​</a></h2><p>加载模块时，目标模块分为相对模块和非相对模块两种。</p><p>相对模块指定是路径以<code>/</code> 、<code>./</code> 开头的模块，是根据当前脚本的位置进行计算的，一般用于保存在当前项目目录结构中的模块脚本</p><p>非相对模块指的是不带路径信息的模块，是由baseUrl属性或者模块映射确定的，通常用于加载外部模块</p><h2 id="_2-classic方法" tabindex="-1"> 2. Classic方法 <a class="header-anchor" href="#_2-classic方法" aria-label="Permalink to &quot;&amp;#x20;2. Classic方法&quot;">​</a></h2><p>以当前脚本的路径作为<strong>基准路径</strong>来计算相对模块的位置，只在一个目录下查找。</p><p>至于非相对模块，也是以当前脚本的路径作为起点，一层层查找上级目录。</p><h2 id="_3-node方法" tabindex="-1"> 3.Node方法 <a class="header-anchor" href="#_3-node方法" aria-label="Permalink to &quot;&amp;#x20;3.Node方法&quot;">​</a></h2><p>就是模拟Node.js的模块加载方法，也就是require()的实现方法。</p><p>相对模块以当前脚本的路径作为<strong>基准路径</strong>，比如，脚本文件<code>a.ts</code>里面有一行代码<code>let x = require(&quot;./b&quot;);</code>，ts 按照以下顺序查找。</p><ol><li>当前目录是否包含<code>b.ts</code>、<code>b.tsx</code>、<code>b.d.ts</code>。如果不存在就执行下一步。</li><li>当前目录是否存在子目录<code>b</code>，该子目录里面的<code>package.json</code>文件是否有<code>types</code>字段指定了模块入口文件。如果不存在就执行下一步。</li><li>当前目录的子目录<code>b</code>是否包含<code>index.ts</code>、<code>index.tsx</code>、<code>index.d.ts</code>。如果不存在就报错。</li></ol><p>非相对模块则是以当前脚本的路径作为起点，逐级向上层目录查找是否存在子目录<code>node_modules</code>。比如，脚本文件<code>a.js</code>有一行<code>let x = require(&quot;b&quot;);</code>，TypeScript 按照以下顺序进行查找。</p><ol><li>当前目录的子目录<code>node_modules</code>是否包含<code>b.ts</code>、<code>b.tsx</code>、<code>b.d.ts</code>。</li><li>当前目录的子目录<code>node_modules</code>，是否存在文件<code>package.json</code>，该文件的<code>types</code>字段是否指定了入口文件，如果是的就加载该文件。</li><li>当前目录的子目录<code>node_modules</code>里面，是否包含子目录<code>@types</code>，在该目录中查找文件<code>b.d.ts</code>。</li><li>当前目录的子目录<code>node_modules</code>里面，是否包含子目录<code>b</code>，在该目录中查找<code>index.ts</code>、<code>index.tsx</code>、<code>index.d.ts</code>。</li><li>进入上一层目录，重复上面4步，直到找到为止。</li></ol><h2 id="_4-路径映射" tabindex="-1"> 4. 路径映射 <a class="header-anchor" href="#_4-路径映射" aria-label="Permalink to &quot;&amp;#x20;4. 路径映射&quot;">​</a></h2><p>可以在tsconfig.json文件里手动指定脚本模块的路径</p><p>（1）baseUrl</p><p><code>baseUrl</code>字段可以手动指定脚本模块的基准目录。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面示例中，<code>baseUrl</code>是一个点，表示基准目录就是<code>tsconfig.json</code>所在的目录。</p><p>（2）paths</p><p><code>paths</code>字段指定非相对路径的模块与实际脚本的映射。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">jquery</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/jquery/dist/jquery</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面示例中，加载模块<code>jquery</code>时，实际加载的脚本是<code>node_modules/jquery/dist/jquery</code>，它的位置要根据<code>baseUrl</code>字段计算得到。</p><p>注意，上例的<code>jquery</code>属性的值是一个数组，可以指定多个路径。如果第一个脚本路径不存在，那么就加载第二个路径，以此类推。</p><p>（3）rootDirs</p><p><code>rootDirs</code>字段指定模块定位时必须查找的其他目录。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">rootDirs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/zh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/de</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/#{locale}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面示例中，<code>rootDirs</code>指定了模块定位时，需要查找的不同的国际化目录。</p><h2 id="_5-编译选项traceresolution" tabindex="-1"> 5. 编译选项<code>traceResolution</code> <a class="header-anchor" href="#_5-编译选项traceresolution" aria-label="Permalink to &quot;&amp;#x20;5. 编译选项\`traceResolution\`&quot;">​</a></h2><p>由于模块定位的过程很复杂，tsc 命令有一个<code>--traceResolution</code>参数，能够在编译时在命令行显示模块定位的每一步。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ tsc --traceResolution</span></span></code></pre></div><p>上面示例中，<code>traceResolution</code>会输出模块定位的判断过程。</p><h2 id="_6-编译选项noresolve" tabindex="-1"> 6. 编译选项<code>noResolve</code> <a class="header-anchor" href="#_6-编译选项noresolve" aria-label="Permalink to &quot;&amp;#x20;6. 编译选项\`noResolve\`&quot;">​</a></h2><p>tsc 命令的<code>--noResolve</code>参数，表示模块定位时，只考虑在命令行传入的模块。</p><p>举例来说，<code>app.ts</code>包含如下两行代码。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> A </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moduleA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> B </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moduleB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>使用下面的命令进行编译。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ tsc app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts moduleA</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">noResolve</span></span></code></pre></div><p>上面命令使用<code>--noResolve</code>参数，因此可以定位到<code>moduleA.ts</code>，因为它从命令行传入了；无法定位到<code>moduleB</code>，因为它没有传入，因此会报错。</p>`,90),n=[e];function t(c,r,y,i,D,F){return o(),a("div",null,n)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
