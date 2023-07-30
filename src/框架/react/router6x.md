React Router 6x比5x有哪些改动？

内置组件将`<Switch/>`改为`<Routes/>`等
语法变化`component={About}`改为`element={<About/>}`等

### 1. BrowserRouter与HashRouter

用来包裹整个应用,`<HashRouter>`修改的是地址的hash值

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
```

### 2. Routes与Route

将`Switch`替换成了`Routes`

*   普通路由

```js
import { HashRouter,Route,Routes } from 'react-router-dom';

// Routes替换了Switch  
<HashRouter>
  <Routes>
   <Route path="/home" element={ <Home/> }></Route>
   <Route path="/user" element={ <User/> }></Route>
  </Routes>
</HashRouter>
```

*   嵌套路由

`Route`嵌套`Route`使用，并且需要使用`<Outlet/>`在父组件指定子组件渲染的位置，`<Outlet/>`就相当于占位符。

```js
<Routes>
    <Route path="/" element={<Admin />} >
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />} />
    </Route>
    
</Routes>
```

解析：

这里的父组件是`<Admin/>`，子组件分别是`<Home/>`、`<User/>`。
这里需要注意的是需要在父组件`<Admin/>`中指定子组件要渲染的某个位置。

```js
// Admin
import React from 'react';
import {Outlet} from "react-router-dom";
const Admin = () => {
  return (
      <div>
        <h1>这是父组件，使用Outlet指定子组件位置</h1>
        <Outlet/>
      </div>
  )
}
export default Admin;
````

### 3. Link导航组件修改URL

`<Link/>`代表一个链接，在html界面中会解析成a标签。作为一个链接，必须有一个to属性，代表链接地址。这个链接地址是一个相对路径。

属性:
to: 链接地址
replace: 布尔类型，当前页面是否关闭
state: 传递信息

```js
<div>
  <Link to="/home">Home</Link> |{" "}
  <Link to="/user">User</Link>
</div>
```

### 4. NavLink 导航组件修改URL

渲染后的a标签，会自动添加`active`类名，实现高亮

to属性代表链接地址

根据组件是否激活，可以将函数传递给 style 或 className 来自定义内联样式或类字符串，也可以将函数作为子项传递给自定义 &lt;NavLink&gt; 组件来更改内部元素样式。

```js
import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // 将当前所选路由的样式应用于 <NavLink>。
  let activeStyle = {
    textDecoration: "underline"
  };
  let activeClassName = "underline"
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="messages"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tasks
          </NavLink>
        </li>
        // 传递信息给子项
        <li>
          <NavLink
            to="tasks"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Tasks
              </span>
            ))}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
```

### 5. Navigate

重定向

属性:
to: 链接地址
replace: 布尔类型，当前页面是否关闭
state: 传递信息

```js
<Routes>
    <Route path="/ho" element={<Navigate to='/user' />} />
</Routes>
```

本来是跳转至`/ho`,然后重定向至了`/user`。

### 6. 404

```js
<Routes>
    <Route
        path="*"
        element={
            <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
            </main>
        }
    />
</Routes>
```

### 7. 路由传参

三种方式：params, search, state

*   useParams读取URL参数

路由格式 /home/12

```js
<Routes>
    <Route path="/" element={<Admin />} >
        <Route path="home" element={<Home />} >
            <Route path=":id" element={<HomeSon />} />
        </Route>
    </Route>
</Routes>
```

```js
// HomeSon页面

import React from 'react';
import { useParams } from 'react-router-dom';

const HomeSon = () => {
    // id 就是传过来的参数 id就是12
    let { id } = useParams();
    return (
        <div>
            这是HomeSon页面 {id}
        </div>
    )
}
export default HomeSon;
```

*   useSearchParam

路由格式 /home?id=1

```js
<Routes>
    <Route path="/" element={<Admin />} >
        <Route path="user" element={<User />} ></Route>
    </Route>
</Routes>

<NavLink to="/user?id=1" style={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>
User</NavLink>
```

```js
// User页面

import React from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
    let [searchParams] = useSearchParams();
    const id = searchParams.get('id'); // id为参数值
    return (
        <div>这是user页面</div>
    )
}

export default User;
```

*   state传参

在地址栏看不见参数

useLocation方法获取参数

```js
// state定义id为1
<div
  style={{
      borderBottom: "solid 1px",
      paddingBottom: "1rem"
  }}
>
  <NavLink to='/state' state={{ id: 1  }}>State</NavLink>
</div>
```

```js
// state页面

import { useLocation } from 'react-router-dom';

const State = () => {
    const {state} = useLocation();
    console.log(state); // { id: 1 }
    return (
        <div style={{ display: "flex" }}>
            <div>这是State组件</div>
            <div>
                {state}
            </div>
        </div>
    );
}
export default State;
```


### 8. 索引路由

注意，它有' index '属性而不是' path '。这是因为索引路由共享父路由的路径。这就是重点——它没有路径。

也许你还在困惑。我们有几种方法来回答“什么是索引路由？”希望其中一条能给你答疑:

在父路由路径的出口出呈现索引路由
当父路由匹配但其他子路由都不匹配时，索引路由匹配。
索引路由是父路由的默认子路由。
当用户还没有单击导航列表中的项目之一时，索引路由会呈现。

比如：`/home`渲染`Home`组件，`/user`渲染`User`组件，而此时`/`若没有定义展示那个组件，则将是空白，而索引路由则解决了这个问题，若索引路由规定`A`组件，则会在`Outlet`处进行渲染`A`组件。

```js
<Routes>
    <Route path="/" element={<Admin />} >
        <Route path="home" element={<Home />} >
            <Route
                index
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>Select an invoice</p>
                    </main>
                }
            />
            <Route path=":id" element={<HomeSon />} />
        </Route>
    </Route>
</Routes>
```

### 9. 编程式路由 useNavigate

不传参

```js
const ProgrammaticIndex = () => {
    const nav = useNavigate();
    const jump = () => {
        nav('/useNavigateRouter');
    }
    
    return (
        <div style={{padding: '20px'}}>
            <button onClick={() => jump()}>跳转至useNavigateRouter, useNavigate()方法</button>
        </div>
    )
}
```

传参
属性：replace 决定是否替换当前的路由，若替换返回时将不能回到当前的路由

```js
const ProgrammaticIndex = () => {
    const nav = useNavigate();
    const jump = () => {
        nav('/useNavigateRouter', {replace: false,state:{ id:'reactiv3'}});
    }
    return (
        <div style={{padding: '20px'}}>
            <button onClick={() => jump()}>跳转至useNavigateRouter, useNavigate()方法</button>
        </div>
    )
}
```

### 10. useRoutes方法

useRoutes hook 在功能上等同于 &lt;Routes&gt; ，使用 JavaScript 对象而不是 &lt;Route&gt; 元素来定义路由，所用对象与普通 &lt;Route&gt; 元素 具有相同属性但不需要用 JSX。
就是&lt;Routes&gt;的另一种写法，用js写，useRoutes接受一个数组，每项就是路由

`Routes`写法

```jsx
import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from "../home/index.jsx";
import User from "../user/index.jsx";

const Layout = () => {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" element={<Admin />} >
                    <Route path="home" element={<Home />} />
                    <Route path="user" element={<User />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Layout;
```

`useRoutes`写法

```jsx
import React, {useEffect} from 'react'
import {useRoutes} from 'react-router-dom';
import Home from "../home/index.jsx";
import User from "../user/index.jsx";

const Layout = () => {
    const routeElement = useRoutes([
        {
            path: '/',
            element: <Admin/>,
            children: [
                {
                    path: 'home',
                    element: <Home/>,
                },
                {
                    path: 'user',
                    element: <User/>,
                }
            ]
        }
    ]);

    return (
        <div id='loayout'>
            {routeElement}
        </div>
    )
}

export default Layout;

```

### 11. 路由懒加载

使用`lazy`进行包裹

```js
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const About = React.lazy(() => import('./pages/About'));
```



**{docsify-updated}**