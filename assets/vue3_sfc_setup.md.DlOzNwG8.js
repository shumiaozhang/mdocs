import{_ as s,c as t,o as e,a2 as i}from"./chunks/framework.DwDoyBw8.js";const _=JSON.parse('{"title":"<script setup>","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/sfc/setup.md","filePath":"vue3/sfc/setup.md"}'),a={name:"vue3/sfc/setup.md"},p=i(`<h1 id="script-setup" tabindex="-1">&lt;script setup&gt; <a class="header-anchor" href="#script-setup" aria-label="Permalink to &quot;\\&lt;script setup&gt;&quot;">​</a></h1><p>&lt;script setup&gt; 是在单文件组件(SFC)中使用组合式API的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。</p><p>相比于普通的 &lt;script&gt; 语法，它具有更多优势</p><ul><li>更少的样板内容，更简洁的代码。</li><li>能够使用纯 TypeScript 声明 props 和自定义事件。</li><li>更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。</li><li>更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。</li></ul><h2 id="_1-基本语法" tabindex="-1">1. 基本语法 <a class="header-anchor" href="#_1-基本语法" aria-label="Permalink to &quot;1. 基本语法&quot;">​</a></h2><p>要启用该语法，需要在 <code>&lt;script&gt;</code> 代码块上添加 <code>setup</code> attribute：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.log(&#39;hello script setup&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="顶层的绑定会被暴露给模板" tabindex="-1">顶层的绑定会被暴露给模板 <a class="header-anchor" href="#顶层的绑定会被暴露给模板" aria-label="Permalink to &quot;顶层的绑定会被暴露给模板&quot;">​</a></h4><p>当使用 <code>&lt;script setup&gt;</code> 的时候，任何在 <code>&lt;script setup&gt;</code> 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用</p>`,9),l=[p];function c(r,n,o,h,d,u){return e(),t("div",null,l)}const g=s(a,[["render",c]]);export{_ as __pageData,g as default};
