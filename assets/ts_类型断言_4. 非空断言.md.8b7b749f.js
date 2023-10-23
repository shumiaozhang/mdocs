import{_ as s,o as n,c as a,U as l}from"./chunks/framework.adbdbaa5.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ts/类型断言/4. 非空断言.md","filePath":"ts/类型断言/4. 非空断言.md"}'),p={name:"ts/类型断言/4. 非空断言.md"},o=l(`<p>就是对于可能为空的变量(值等于undefined或努力),ts提供了非空断言，当ts推断时，给推断说该变量不为空。写法直接在变量名后面加上感叹号!。</p><p>对于过多使用非空断言会造成安全隐患，一定要确保某些变量一定不为空才可以。</p><p>非空断言可以用于赋值断言，因为ts有个编译选项，要求类的属性必须初始化，如果不初始化会报错，此时就可以使用非空断言，表示这两个属性肯定会有值，就不会报错了。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">!:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 正确</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">!:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 正确</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,4),t=[o];function e(c,r,y,i,D,F){return n(),a("div",null,t)}const A=s(p,[["render",e]]);export{C as __pageData,A as default};
