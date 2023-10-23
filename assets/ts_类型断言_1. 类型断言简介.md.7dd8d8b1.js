import{_ as s,o as n,c as a,U as l}from"./chunks/framework.adbdbaa5.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ts/类型断言/1. 类型断言简介.md","filePath":"ts/类型断言/1. 类型断言简介.md"}'),p={name:"ts/类型断言/1. 类型断言简介.md"},o=l(`<p>就是对于没有类型声明的值，有时候ts类型推断时，推断的结果并不正确，所以ts提供了一种<strong>类型断言</strong>的方法，告诉编译器此处的值是什么类型的，而ts一旦发现存在类型断言，就不再对该值进行类型推断直接给出断言的类型。</p><p>类型断言的实质：允许开发者在某个位置<strong>绕过</strong>编译器的类型推断，让本来通不过类型检验的代码能够通过，避免编译器报错，这样虽然削弱了ts类型系统的严格性，但也给开发者带来了方便。</p><p>总之，类型断言并不是真的改变一个值的类型，而是提示编译器，应该如何处理这个值。</p><p>写法：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 语法一：&lt;类型&gt;值</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">&gt;value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 语法二：值 as 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type</span></span></code></pre></div><p><strong>应用</strong></p><ul><li>对象类型会严格检查字面量，如果存在额外的属性会报错，此时可以通过类型断言解决</li></ul><p>写法一：断言将右边类型改为于左边类型一致</p><p>写法二：右边类型变为左边类型的子类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">:{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 正确 写法一</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p0</span><span style="color:#89DDFF;">:{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 正确 写法二</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p1</span><span style="color:#89DDFF;">:{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span></code></pre></div><ul><li>有时候不能滥用，否则会在运行时报错</li></ul><p>比如对象本身没有length属性，而使用类型断言强行设置，虽然能通过编译时的检测但等到运行时也会报错。</p><ul><li>指定unknown类型的变量具体类型，因为unknown类型的变量不能赋值给其他类型，但是通过类型断言就可以。</li><li>也可以指定联合类型的值的具体类型,本来一个变量是联合类型的值，但是通过类型断言可以指定其具体的类型。</li></ul><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> s1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> s2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,14),t=[o];function e(c,r,y,D,C,F){return n(),a("div",null,t)}const _=s(p,[["render",e]]);export{i as __pageData,_ as default};
