# 5.4 属性校验

为了保证外界传递过来的数据类型和组件要求的一致，可以借助于 `prop-types` 模块，实现组件中 props 数据类型校验，使用步骤如下：

1. 安装属性校验的依赖包：
   ```
   npm i prop-types -S
   ```
2. 在需要的组件内，导入属性校验的依赖包：
   ```javascript
   // 这个包中预定义了各种数据类型，比如 number、func、string 等
   import Types from 'prop-types'
   ```
3. 在需要的组件内，定义静态属性 `propTypes` ，对外界传递到组件中的 props 数据进行类型校验：
   ```javascript
   static propTypes = {
     // Types.number 表示数字类型
     // isRequired 表示必填项，如果外界没有指定 isRequired 修饰的 props 属性，则终端报警告！
     initcount: Types.number.isRequired
   }
   ```
