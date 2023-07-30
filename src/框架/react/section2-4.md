# styled-components

1. 安装依赖项：
    ```
    npm install styled-components -S
    ```
2. 在需要的组件内，导入依赖包：
    ```
    import styled from 'styled-components'
    ```
3. 创建带样式的自定义组件：
    ```javascript
    const MyButton = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
    `
    ```
4. 在页面上使用组件：
    ```html
    <MyButton>按钮</MyButton>
    ```