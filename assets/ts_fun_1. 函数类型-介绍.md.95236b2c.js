import{_ as s,o as n,c as a,U as l}from"./chunks/framework.adbdbaa5.js";const i=JSON.parse('{"title":"1. 函数赋值为一个变量","description":"","frontmatter":{},"headers":[],"relativePath":"ts/fun/1. 函数类型-介绍.md","filePath":"ts/fun/1. 函数类型-介绍.md"}'),p={name:"ts/fun/1. 函数类型-介绍.md"},o=l(`<p>函数类型声明，需要在声明函数时，给出参数的类型和返回值的类型。</p><p><strong>参数类型直接在参数后接冒号+ 类型；返回值类型在参数圆括号后接冒号+类型。</strong></p><p>这里定义的参数类型是string，返回值的类型是void</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">txt</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>如果不指定参数类型，ts会自动推断，如果推断不出来会推断为any类型。</p><p>返回值通常可以不写，ts会自己推断，但是有时候出于代码文档目的，返回值类型写上比较好。</p><h1 id="_1-函数赋值为一个变量" tabindex="-1"> 1. 函数赋值为一个变量 <a class="header-anchor" href="#_1-函数赋值为一个变量" aria-label="Permalink to &quot;&amp;#x20;1. 函数赋值为一个变量&quot;">​</a></h1><p><strong>如果变量被赋值为一个函数，变量的类型有两种写法。</strong></p><p>第一种：根据函数类型推断出变量的类型。</p><p>第二种：使用箭头函数形式为变量指定类型，参数类型在箭头左侧，返回值类型在箭头右侧。</p><p><strong>第二种写法需要注意的是：</strong></p><ul><li>函数的参数一定要写在圆括号内，不然会报错。</li><li>参数名必须写，不能只写类型，否则会把类型当做参数名，any类型</li></ul><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 写法一</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hello </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">txt</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 写法二</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hello</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">txt</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>给变量定义类型时，函数类型里面的参数名与实际参数名，可以不一致。</p><p>如果一个函数类型定义很长，可以使用type命令定义一个别名。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyFunc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hello</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">MyFunc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">txt</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>函数的实际参数个数，可以少于类型指定的参数个数，但是不能多，也就是ts允许省略参数。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> myFunc</span><span style="color:#89DDFF;">:(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">myFunc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 正确</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">myFunc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 报错</span></span></code></pre></div><p>如果一个变量要嵌套另一个函数类型，有个技巧就是使用typeof运算符。</p><p>这是一个很有用的技巧，任何需要类型的地方，都可以使用<code>typeof</code>运算符从一个值获取类型。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myAdd</span><span style="color:#89DDFF;">:typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>函数类型还可以采用对象的写法。</strong></p><p>这种写法的函数参数与返回值之间，间隔符是冒号<code>:</code>，而不是正常写法的箭头<code>=&gt;</code>，因为这里采用的是对象类型的写法，对象的属性名与属性值之间使用的是冒号。</p><p>这种写法平时很少用，但是非常合适用在一个场合：<strong>函数本身存在属性。</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> add</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数f()本身还有一个属性version。这时，f完全就是一个对象，类型就要使用对象的写法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>函数类型也可以使用 Interface 来声明，这种写法就是对象写法的翻版</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">myfn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> add</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">myfn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,27),t=[o];function e(c,r,y,D,F,C){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};
