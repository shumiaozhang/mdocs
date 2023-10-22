import{_ as s,o as a,c as n,U as p}from"./chunks/framework.adbdbaa5.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ts/泛型/5. 泛型-类型参数的约束条件.md","filePath":"ts/泛型/5. 泛型-类型参数的约束条件.md"}'),l={name:"ts/泛型/5. 泛型-类型参数的约束条件.md"},o=p(`<p>有时候对于传入的类型，需要在代码内进行判断是否满足某种情况，这时可以再设置类型参数时进行判断是否满足某种情况。</p><p>判断格式：</p><p>TypeParameter表示类型参数，extends是关键字，ConstraintType表示类型参数要满足的条件，就相当于类型参数是ConstraintType的子类即可。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TypeParameter extends ConstraintType</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>类型参数可以同时设置约束条件和默认值，但前提必须默认值满足约束条件</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">A</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  [</span><span style="color:#FFCB6B;">A</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Result</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [&quot;hello&quot;, &quot;world&quot;]</span></span></code></pre></div><p>泛型本质上是一个类型函数，通过输入参数，获得结果，两者是一一对应关系。</p><p>约束条件不能约束自己。</p>`,8),t=[o];function e(c,r,y,C,D,F){return a(),n("div",null,t)}const _=s(l,[["render",e]]);export{A as __pageData,_ as default};
