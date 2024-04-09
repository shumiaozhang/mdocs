import{_ as s,c as t,o as i,a2 as a}from"./chunks/framework.DwDoyBw8.js";const g=JSON.parse('{"title":"<script>元素","description":"","frontmatter":{},"headers":[],"relativePath":"js/js高程/script-element.md","filePath":"js/js高程/script-element.md","lastUpdated":1712676697000}'),e={name:"js/js高程/script-element.md"},l=a(`<h1 id="script-元素" tabindex="-1">&lt;script&gt;元素 <a class="header-anchor" href="#script-元素" aria-label="Permalink to &quot;\\&lt;script\\&gt;元素&quot;">​</a></h1><p>把<code>JavaScript</code>插入到<code>HTML</code>中需要用到&lt;script&gt;元素。这个元素可以把JavaScript嵌入到HTML页面中，让脚本与标记混在一起，也可以写在一个外部文件中，引入到HTML中。</p><p><strong>注意点</strong></p><ol><li>引入外部js文件，需要用到<code>src</code>属性，这个外部文件即可以是同一个服务上的文件也可以是其他域上的文件。</li><li>所有&lt;script&gt;元素都会按照他们在页面中出现的先后顺序执行。在不使用<code>defer</code>和<code>async</code>属性的情况下，只有在解析完前面&lt;script&gt;元素中的代码之后，才会解析后面的&lt;script&gt;元素代码。</li></ol><p>例如：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./a.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./b.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>先执行<code>a.js</code>执行完<code>a.js</code>之后才会开始执行<code>b.js</code>文件。</p><ol start="3"><li>由于浏览器会先解析完不使用<code>defer</code>属性的&lt;script&gt;元素中的代码，然后再解析后面的内容，所以一般会把&lt;script&gt;元素放在页面的最后面。</li><li>使用<code>defer</code>属性可以让脚本在文档完成呈现之后再执行。延迟脚本总是按照指定它们的顺序执行。</li><li>使用<code>async</code>属性可以表示当前脚本不用等待其他脚本，也不必阻塞文档呈现，不能保证异步脚本按照它们在页面中出现的顺序执行。</li></ol><p><strong>{docsify-updated}</strong></p>`,9),p=[l];function c(n,r,d,o,h,k){return i(),t("div",null,p)}const _=s(e,[["render",c]]);export{g as __pageData,_ as default};
