import{_ as t,c as e,o as a,a2 as l}from"./chunks/framework.DwDoyBw8.js";const g=JSON.parse('{"title":"语法定义","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/sfc/语法定义 copy 9.md","filePath":"vue3/sfc/语法定义 copy 9.md","lastUpdated":1712676697000}'),c={name:"vue3/sfc/语法定义 copy 9.md"},o=l('<h1 id="语法定义" tabindex="-1">语法定义 <a class="header-anchor" href="#语法定义" aria-label="Permalink to &quot;语法定义&quot;">​</a></h1><p>一个 Vue 单文件组件 (SFC)，通常使用 *.vue 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。</p><p>每一个 *.vue 文件都由三种顶层语言块构成：<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code></p><h2 id="template" tabindex="-1">&lt;template&gt; <a class="header-anchor" href="#template" aria-label="Permalink to &quot;\\&lt;template&gt;&quot;">​</a></h2><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个顶层 <code>&lt;template&gt;</code> 块。</p></li><li><p>语块包裹的内容将会被提取、传递给 <code>@vue/compiler-dom</code>，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 <code>render</code> 选项。</p></li></ul><h2 id="script-​" tabindex="-1">&lt;script&gt;​ <a class="header-anchor" href="#script-​" aria-label="Permalink to &quot;\\&lt;script&gt;​&quot;">​</a></h2><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个 &lt;script&gt; 块。(使用 &lt;script setup&gt; 的情况除外)</p></li><li><p>这个脚本代码块将作为 ES 模块执行。</p></li><li><p>默认导出应该是 Vue 的组件选项对象，可以是一个 <strong>对象字面量或是defineComponent 函数的返回值</strong>。</p></li></ul><h2 id="script-setup-​" tabindex="-1">&lt;script setup&gt;​ <a class="header-anchor" href="#script-setup-​" aria-label="Permalink to &quot;\\&lt;script setup&gt;​&quot;">​</a></h2><ul><li><p>每个<code>*.vue</code>文件最多可以包含一个 &lt;script setup&gt;。(不包括一般的 &lt;script&gt;)</p></li><li><p>这个脚本块将被预处理为组件的setup()函数，这意味着它将为每一个组件实例都执行。</p></li><li><p>&lt;script setup&gt; 中的顶层绑定都将自动暴露给模板。</p></li></ul><h2 id="style-​" tabindex="-1">&lt;style&gt;​ <a class="header-anchor" href="#style-​" aria-label="Permalink to &quot;\\&lt;style&gt;​&quot;">​</a></h2><p>每个<code>*.vue</code>文件可以包含多个 &lt;style&gt; 标签。</p><p>一个 &lt;style&gt; 标签可以使用scoped</p><h2 id="预处理器​" tabindex="-1">预处理器​ <a class="header-anchor" href="#预处理器​" aria-label="Permalink to &quot;预处理器​&quot;">​</a></h2><p>代码块可以使用lang这个 attribute 来声明预处理器语言，最常见的用例就是在 &lt;script&gt; 中使用 TypeScript</p>',14),p=[o];function i(r,s,d,u,n,h){return a(),e("div",null,p)}const m=t(c,[["render",i]]);export{g as __pageData,m as default};
