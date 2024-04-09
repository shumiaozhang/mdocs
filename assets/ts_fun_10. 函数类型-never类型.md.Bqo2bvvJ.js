import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DwDoyBw8.js";const g=JSON.parse('{"title":"never类型","description":"","frontmatter":{},"headers":[],"relativePath":"ts/fun/10. 函数类型-never类型.md","filePath":"ts/fun/10. 函数类型-never类型.md","lastUpdated":1712676697000}'),e={name:"ts/fun/10. 函数类型-never类型.md"},t=n(`<h1 id="never类型" tabindex="-1">never类型 <a class="header-anchor" href="#never类型" aria-label="Permalink to &quot;never类型&quot;">​</a></h1><p>never类型表示肯定不会出现的值，它用在函数的返回值，表示某个函数肯定不会返回值，即函数不会正常执行结束。函数没有执行结果，不可能有返回值</p><p>应用</p><ul><li>抛出错误的函数</li></ul><p>只有抛出错误才是never类型，如果是return一个Error对象，则返回值是Error类型。</p><p>抛出错误的情况属于never、void类型，所以从返回值类型中不知道，抛出的是哪一种错误。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">never</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>无限执行的函数</li></ul><p>这里while语句，判断条件一直是true，程序会一直循环，不会停止。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">never</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sing&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>如果一个函数抛出了异常或者陷入死循环，那么该函数就无法正常返回一个值，这个函数的返回类型就是never。</p><p>而如果程序调用了一个返回值类型为never的函数，就意味着程序会在该函数的调用位置终止，永远不会执行后续的代码。</p><p>一个函数如果某些条件下有正常返回值，另一些条件下抛出错误，这时它的返回值类型可以省略<code>never</code>。</p><p><strong>never类型和void类型区别：never类型表示函数没有执行结束，不可能返回值；void类型表示函数正常执行结束，但是不返回值或者说返回undefined。</strong></p>`,14),p=[t];function h(l,k,r,d,E,o){return a(),i("div",null,p)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};
