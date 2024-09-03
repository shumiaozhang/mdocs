import{_ as s,c as a,o as t,a4 as e}from"./chunks/framework.E4YCCYO0.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"question/js/firstCollect.md","filePath":"question/js/firstCollect.md"}'),i={name:"question/js/firstCollect.md"},l=e(`<h3 id="_1-跨域策略文件crossdomain-xml的配置方法" tabindex="-1">1. 跨域策略文件crossdomain.xml的配置方法 <a class="header-anchor" href="#_1-跨域策略文件crossdomain-xml的配置方法" aria-label="Permalink to &quot;1. 跨域策略文件crossdomain.xml的配置方法&quot;">​</a></h3><p>链接：<a href="https://blog.csdn.net/houbin0912/article/details/81944471" target="_blank" rel="noreferrer">https://blog.csdn.net/houbin0912/article/details/81944471</a></p><h3 id="_2-ajax请求设置xhrfields的withcredentials为true实现跨域访问" tabindex="-1">2. Ajax请求设置xhrFields的withCredentials为true实现跨域访问 <a class="header-anchor" href="#_2-ajax请求设置xhrfields的withcredentials为true实现跨域访问" aria-label="Permalink to &quot;2. Ajax请求设置xhrFields的withCredentials为true实现跨域访问&quot;">​</a></h3><p><strong>作用：</strong> 在跨域请求是否允许携带cookie</p><p>withCredentials是XMLHttpRequest的一个属性，表示跨域请求是否提供凭据信息(cookie、HTTP认证及客户端SSL证明等)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ajax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   url: a_cross_domain_url,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 将XHR对象的withCredentials设为true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   xhrFields: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      withCredentials: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>链接：<a href="https://www.cnblogs.com/fliu/articles/5465685.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/fliu/articles/5465685.html</a></p><h3 id="_3-axios中的withcredentials问题" tabindex="-1">3. axios中的withCredentials问题 <a class="header-anchor" href="#_3-axios中的withcredentials问题" aria-label="Permalink to &quot;3. axios中的withCredentials问题&quot;">​</a></h3><p>链接：<a href="https://segmentfault.com/q/1010000015791317/a-1020000015791623" target="_blank" rel="noreferrer">https://segmentfault.com/q/1010000015791317/a-1020000015791623</a></p><h3 id="_4-正则表达式应用-如何判断字符串中不包含连续重复的数字或者字母" tabindex="-1">4. 正则表达式应用&quot;如何判断字符串中不包含连续重复的数字或者字母&quot; <a class="header-anchor" href="#_4-正则表达式应用-如何判断字符串中不包含连续重复的数字或者字母" aria-label="Permalink to &quot;4. 正则表达式应用&quot;如何判断字符串中不包含连续重复的数字或者字母&quot;&quot;">​</a></h3><p>链接：<a href="https://jzplp.github.io/2020/regex-password.html" target="_blank" rel="noreferrer">https://jzplp.github.io/2020/regex-password.html</a></p>`,11),r=[l];function n(h,o,p,d,c,k){return t(),a("div",null,r)}const m=s(i,[["render",n]]);export{_ as __pageData,m as default};
