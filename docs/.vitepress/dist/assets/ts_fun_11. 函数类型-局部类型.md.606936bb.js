import{_ as s,o as a,c as n,U as l}from"./chunks/framework.adbdbaa5.js";const _=JSON.parse('{"title":"局部类型","description":"","frontmatter":{},"headers":[],"relativePath":"ts/fun/11. 函数类型-局部类型.md","filePath":"ts/fun/11. 函数类型-局部类型.md"}'),o={name:"ts/fun/11. 函数类型-局部类型.md"},p=l(`<h1 id="局部类型" tabindex="-1">局部类型 <a class="header-anchor" href="#局部类型" aria-label="Permalink to &quot;局部类型&quot;">​</a></h1><p>函数内部声明其他类型，该类型只在函数内部有效，称为局部类型。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newTxt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">txt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newTxt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newTxt</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">message</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 报错</span></span></code></pre></div>`,3),e=[p];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{_ as __pageData,A as default};
