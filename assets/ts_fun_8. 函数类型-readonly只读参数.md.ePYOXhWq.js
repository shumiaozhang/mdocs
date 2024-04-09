import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.DwDoyBw8.js";const y=JSON.parse('{"title":"readonly只读参数","description":"","frontmatter":{},"headers":[],"relativePath":"ts/fun/8. 函数类型-readonly只读参数.md","filePath":"ts/fun/8. 函数类型-readonly只读参数.md","lastUpdated":1712676697000}'),t={name:"ts/fun/8. 函数类型-readonly只读参数.md"},e=n(`<h1 id="readonly只读参数" tabindex="-1">readonly只读参数 <a class="header-anchor" href="#readonly只读参数" aria-label="Permalink to &quot;readonly只读参数&quot;">​</a></h1><p>如果函数内部不能修改某个参数，可以在函数定义时，在参数类型加上readonly关键字，表示这个参数是只读的。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> arraySum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:readonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 报错</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3),l=[e];function p(h,r,k,d,o,c){return i(),a("div",null,l)}const E=s(t,[["render",p]]);export{y as __pageData,E as default};
