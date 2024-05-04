import{_ as s,c as i,o as e,a2 as a}from"./chunks/framework.DwDoyBw8.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/js/defineproperty.md","filePath":"js/js/defineproperty.md"}'),p={name:"js/js/defineproperty.md"},t=a(`<p><code>Object.defineproperty</code> 的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineproperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, prop, desc)</span></span></code></pre></div><ul><li><p>参数1：obj 需要定义属性的当前对象</p></li><li><p>参数2：prop 当前需要定义的属性名</p></li><li><p>参数3：desc 描述符 一般是一个对象</p></li></ul><p><code>desc</code>包含属性有<code>value</code>、<code>enumerable</code>、<code>writable</code> 、<code>configurable</code>、<code>set</code>、<code>get</code></p><p><code>value</code>属性值</p><p><code>enumerable</code>属性是否可以枚举，默认false</p><p><code>writable</code>属性是否可以被修改，默认false</p><p><code>configurable</code>属性是否可以被删除，默认false</p><p><code>set</code> 是设置值的方法，类型是<code>function </code></p><p><code>get</code> 是获取值的方法，类型是<code>function</code></p><p><strong><code>get</code>和<code>set</code>是成对出现的</strong></p><p>例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><p>在<code>person</code>对象上新增一个属性<code>age</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 属性值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enumerable:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//属性是否可以枚举，默认值是false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    writable:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//属性是否可以被修改，默认值是false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    configurable:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //属性是否可以被删除，默认值是false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// person: {age: 18}</span></span></code></pre></div>`,15),n=[t];function l(d,h,o,c,k,r){return e(),i("div",null,n)}const y=s(p,[["render",l]]);export{E as __pageData,y as default};
