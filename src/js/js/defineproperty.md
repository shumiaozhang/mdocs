



`Object.defineproperty` 的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性。

```js
Object.defineproperty(obj, prop, desc)
```

- 参数1：obj     需要定义属性的当前对象

- 参数2：prop    当前需要定义的属性名

- 参数3：desc    描述符 一般是一个对象

`desc`包含属性有`value`、`enumerable`、`writable` 、`configurable`、`set`、`get`

`value`属性值

`enumerable`属性是否可以枚举，默认false

`writable`属性是否可以被修改，默认false

`configurable`属性是否可以被删除，默认false

`set`  是设置值的方法，类型是`function `

`get` 是获取值的方法，类型是`function`

**`get`和`set`是成对出现的**



例如：

```js
const person = {}
```



在`person`对象上新增一个属性`age`

```js
Object.defineProperty(person,'age',{
    value:18, // 属性值
    enumerable:true, //属性是否可以枚举，默认值是false
    writable:true, //属性是否可以被修改，默认值是false
    configurable:true //属性是否可以被删除，默认值是false
})
// person: {age: 18}
```



