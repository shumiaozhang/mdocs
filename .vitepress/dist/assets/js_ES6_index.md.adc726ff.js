import{_ as s,o as a,c as l,U as o}from"./chunks/framework.adbdbaa5.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/ES6/index.md","filePath":"js/ES6/index.md","lastUpdated":1690726577000}'),n={name:"js/ES6/index.md"},p=o(`<blockquote><p>在ES6之前JavaScript是没有真正性的模块化，导入与导出的，之前有common.Js，AMD，在ES6中引入了模块化概念,一个文件即是一个模块。</p></blockquote><h2 id="_1-export-导出" tabindex="-1">1. export 导出 <a class="header-anchor" href="#_1-export-导出" aria-label="Permalink to &quot;1. export 导出&quot;">​</a></h2><p>模块功能主要有两个命令构成： <code>export</code>和 <code>import</code>。 <code>export</code>规定模块的对外接口，也就是导出， <code>import</code>规定用来输入其他模块功能，也就是导入。</p><p>一个模块就是一个文件，该文件内的所有变量对于外部都是不可见的，如果想在另一个文件内使用本文件中的变量，就要用到 <code>export</code>将文件中的变量导出。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// name.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> firstName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Join</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> lastName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">In</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>用 <code>export</code>导出了两个变量</p><p>以上是一种方式，还有另一种方式：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> firstName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Join</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> lastName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">In</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastName</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>先将要对外输出的变量声明好，然后直接用export大括号一块直接导出。除了可以导出变量外，也可以导出函数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>再者可以将导出的名称重命名，使用 <code>as</code>关键字</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newName</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这种情况就是导出时，本来的变量或者函数名称为<code>firstName</code>,输出时改变名称为<code>newName</code>。当然也可以将导出的名称换好几个名称一块导出</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastName</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">API</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这里就是将名称为 <code>firstName</code>的变量或者函数命为两个名称一块导出的。</p><p>特别要注意的是 <code>export</code>命令对外提供的接口一定要与模块内部的变量要建立一一对应关系 但是对于以下情况是不能导出成功的</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> firstName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Join</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> firstName</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>因为这里的导出，导出的是变量 <code>firstName</code>，而<code>firstName</code>是值，不是接口。</p><h4 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h4><p>使用export导出的模块，当导入时的名称要和导出时的名称一致。</p><h2 id="_2-import-导入" tabindex="-1">2. import 导入 <a class="header-anchor" href="#_2-import-导入" aria-label="Permalink to &quot;2. import 导入&quot;">​</a></h2><p>使用 <code>export</code>命令定义了模块导出的接口后，可以在其他文件中使用 <code>import</code>命令加载这个模块。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./name.js</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><blockquote><p>使用一个大括号的形式，里面指定从其他模块导入的变量名即可。导入的路径即可以是相当路径，也能是绝对路径，后缀名 <code>.js</code>也可以省略。</p></blockquote><h5 id="重命名-as关键字" tabindex="-1">重命名，as关键字 <a class="header-anchor" href="#重命名-as关键字" aria-label="Permalink to &quot;重命名，as关键字&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">API</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./name</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>这里就是本将该导入的名称是 <code>firstName</code>使用 <code>API</code>进行代替。</p><h5 id="import具有提升效果-就是会提升到文件的头部在执行" tabindex="-1">import具有提升效果，就是会提升到文件的头部在执行 <a class="header-anchor" href="#import具有提升效果-就是会提升到文件的头部在执行" aria-label="Permalink to &quot;import具有提升效果，就是会提升到文件的头部在执行&quot;">​</a></h5><blockquote><p>假如将导入放入底下，在上面使用也不会报错</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(firstName)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./name</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>这种情况不会报错，代码执行时，会先执行导入，再输出 <code>firstName</code></p><h2 id="_3-整体加载" tabindex="-1">3 整体加载 <a class="header-anchor" href="#_3-整体加载" aria-label="Permalink to &quot;3 整体加载&quot;">​</a></h2><p>再者除了可以指定加载某个输出值，也可以使用整体加载(即星号*)用来指定一个对象，将导出的内容全部加载在这个对象上</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">All</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./name.js</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>假如导入的里面有 <code>firstName</code> <code>lastName</code>, 使用时直接 <code>API.firstName</code>即可。</p><h2 id="_4-export-default" tabindex="-1">4. export default <a class="header-anchor" href="#_4-export-default" aria-label="Permalink to &quot;4. export default&quot;">​</a></h2><p>上面介绍到 <code>export</code> 进行导出，导入的时候使用 <code>import</code> ，但需要知道从另一个模块导出时的变量名或者是函数名，但是有时候我们并不想要去导入文件中查看，这时候就会用到了 <code>export default</code> 导出，实际上 <code>export default</code>是默认导出，既然是默认导出也就是说一个模块使用 <code>export default</code> 方法进行导出只能使用一次，当然 <code>export</code> 、<code>exportdefault</code>两种导出方法是可以共存的。</p><p>比如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// export-default.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是export-default.js文件导入的内容</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这里使用的是默认导出，导出了一个为匿名函数，当导入时可以对这个匿名函数另起名字</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.js  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> fun </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./export-default.js</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>导出多个时</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">     constVal</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">     constVal1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">     constVal2 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="这里有三点需要注意" tabindex="-1">这里有三点需要注意 <a class="header-anchor" href="#这里有三点需要注意" aria-label="Permalink to &quot;这里有三点需要注意&quot;">​</a></h5><ul><li>此时导入时 <code>import</code>后不需要使用大括号</li><li>也不需要知道要导入的文件中的变量名或函数名，可以另起一个名称，导出的内容会是一个对象形式。</li><li>假如要按需求只导入某一个或某几个也可以用大括号的形式进行导入。</li></ul><h5 id="export-default-与-export-区别" tabindex="-1">export default 与 export 区别 <a class="header-anchor" href="#export-default-与-export-区别" aria-label="Permalink to &quot;export default 与 export 区别&quot;">​</a></h5><p>1.export default 属于默认导出，其实是 <code>export</code> 下有一个叫 <code>default</code> 的属性进行导出，只不过是这个 <code>default</code>属性名是开发人员可以更改的，所以在导出时跟 <code>export</code>是有所区分的。</p><p><code>export</code> 导出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// a.js</span></span>
<span class="line"><span style="color:#A6ACCD;">export var constVal = 1;</span></span></code></pre></div><p><code>exprot default</code> 导出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// b.js</span></span>
<span class="line"><span style="color:#A6ACCD;">export default var constVal = 1;</span></span></code></pre></div><p>使用 <code>export</code>导出是正确的，但是使用 <code>export default</code>就是错误的。原因是在export default 已经在export 下有这个default变量名了，而在 <code>export</code>导出时，这里的<code>constVal</code>其实就是代替<code>default</code>的，只是名称不同而已。</p><p>ES6中模块的 <code>module</code>导出的实质为 <code>export.default</code></p><p>在<code>a.js</code>模块中其实可看作为：<code>export.constVal</code>, 这里用<code>constVal</code>代替了<code>default</code>，因为它是可修改的。</p><p>在<code>b.js</code>模块中直接导出的是：<code>export.default</code>, 这里没有对<code>default</code>进行名称更改，如果像<code>b.js</code>模块这个导出，就会变成<code>export.default.constVal</code>, 所以会出错，不符合导出的规则。</p><p>2.两种导出模式的比较</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// a.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于export default val</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// b.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等同于import val from &#39;./a.js&#39;</span></span></code></pre></div><p>如果想同时导入默认和其他接口也可以存在的,使用逗号 <code>,</code>区分</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> MoRen</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a.js</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="_5-export-和import-同时存在" tabindex="-1">5. export 和import 同时存在 <a class="header-anchor" href="#_5-export-和import-同时存在" aria-label="Permalink to &quot;5. export 和import 同时存在&quot;">​</a></h2><p>有时想在一个模块中导入某个接口，然后导出同样的接口名称属于同一个模块时，可以合并操作</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span></code></pre></div><p>等同于</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_6-跨模块常量" tabindex="-1">6. 跨模块常量 <a class="header-anchor" href="#_6-跨模块常量" aria-label="Permalink to &quot;6. 跨模块常量&quot;">​</a></h2><p>这种情况存在于如果一个模块使用多个模块，当挺多的时候，可以创建一个 <code>index.js</code>模块，把所有的模块导入到<code>index.js</code>模块中，使用时直接导入<code>index.js</code>模块即可。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// index.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">foo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>假如在<code>c.js</code>模块中要用到 <code>foo</code>和 <code>bar</code>即可只引入<code>index.js</code>模块就可以了。</p><h2 id="_7-import" tabindex="-1">7. import() <a class="header-anchor" href="#_7-import" aria-label="Permalink to &quot;7. import()&quot;">​</a></h2><p>使用 <code>import</code> 导入时为静态分析，JavaScript执行时会把 <code>import</code>导入的模块直接执行出来，会提到模块的最顶端，假如需要条件进行加载不同的模块，此时就不行，不会动态去加载。而import()恰恰解决这种加载模式，可以实现动态加载。</p><p>import() 这里的括号() 填写要加载的模块路径，例如：<code>import(&#39;./a.js&#39;); \`\`import()</code> 会返回一个 <code>Promise</code>对象</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">result</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">( </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   </span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>这里的 <code>.then</code>方法的参数(result)就是导入模块的一个对象集合，如果只想使用某一个或某几个也可以使用对象的解构赋值的语法，获取输出接口。</p><p><strong>{docsify-updated}</strong></p>`,75),e=[p];function t(c,r,y,i,D,F){return a(),l("div",null,e)}const A=s(n,[["render",t]]);export{C as __pageData,A as default};
