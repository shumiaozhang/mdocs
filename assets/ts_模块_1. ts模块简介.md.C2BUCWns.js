import{_ as t,c as s,o as e,a2 as p}from"./chunks/framework.DwDoyBw8.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ts/模块/1. ts模块简介.md","filePath":"ts/模块/1. ts模块简介.md"}'),a={name:"ts/模块/1. ts模块简介.md"},i=p('<p>如果一个文件包含import或export语句就是一个模块，相应地如果文件不包含export语句，就是一个全局的脚本文件。</p><p>模块本身就是一个作用域，不属于全局作用域。模块内部的变量、函数、类只在内部可见，对于模块外部是不可见的。暴露给外部的接口，必须使用exprot命令声明；如果一个文件要使用模块的接口，需要用import命令导入。</p><p>如果一个文件不包含export语句，但是希望把它当做一个模块，可以在脚本头部添加一行export语句，不会起到任何作用，就是将文件当做模块处理，代码变成了内部代码。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><p>ts支持ES6模块的语法，加载模块时可以省略模块文件的后缀名。</p>',5),o=[i];function r(_,n,c,d,l,h){return e(),s("div",null,o)}const u=t(a,[["render",r]]);export{k as __pageData,u as default};
