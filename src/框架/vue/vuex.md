# Vuex

Vuex是一个专为vue.js开发的状态管理模式，采用的是集中式存储管理状态，并以相应的规则保证状态以一种可预测的方式发生变化

这个状态管理包括以下几部分
- state 驱动应用的数据源
- view 以声明的方式将state映射到视图中
- actions 响应在view上用户输入导致的状态变化

Vuex的状态流向原理

state作为数据操作的数据源，经过渲染到视图，当用户去操作时，需要通过mutation提交从而去改变state，进而再驱动视图变化，而对于mutation只能提交同步的，对于异步来说需要使用action进而提交。

+ 为了在每个组件中都能获取到store, 需要使用`Vue.use(Vuex)`注入到每个子组件中

### 1. State
Vuex使用单一状态树，用一个对象包含全部状态的应用层级状态，唯一的数据源。

store.js
```js
const store = new Store({
  state() {
   count: 1
  }
})
```

在vue组件中获取Vuex状态，Vuex的存储是响应式的，对于获取最简单的就是使用一个计算属性

```js
  computed: {
    count() {
      return this.$store.state.count
    }
  }
```
这样当每次state中的count变化时，都会通过计算属性获取新值，从而更新DOM

使用mapState辅助函数获取state值
```js
import { mapState } from 'Vuex'

computed: mapState({
  // 使用箭头函数
  count: state => state.count,
  // 使用字符串参数
  countAir: 'count', // 这里的count相当于 state => state.count
  // 若想使用当前组件中的data值，不能使用箭头函数，会改变this指向
  countData(state) {
    return state.count + this.loatCount
  }
})
// mapState与本组件中的计算属性混用 对象展开运算符
computed: {
  count() {
    return this.counts
  },
  ...mapState({
    // 使用箭头函数
    count: state => state.count,
    // 使用字符串参数
    countAir: 'count', // 这里的count相当于 state => state.count
    // 若想使用当前组件中的data值，不能使用箭头函数，会改变this指向
    countData(state) {
      return state.count + this.loatCount
    }
  })
}
```
### 2. Getter
getter相当于state的计算属性，可以将值缓存起来，当值发生变化时，才会去发生改变。适用于当提交过来的值要在进行简单操作时可以使用，比如反转字符串等

store.js
```js
const store = new Store({
  state() {
    count: 1
  },
  getters: {
    countAir(state) {
      return state.count + 1
    }
  }
})
```
getters会接收两个参数，第一个参数是state,第二个参数为getters


在组件中获取getters

```js
computed: {
  count() {
    return this.$store.getters.countAir
  }
}
```
使用`mapGetters`辅助函数
```js
import { mapGetters } from 'Vuex'

computed: {
  // 这里的countAir是store中getters中定义的名称
  ...mapGetters(['countAir'])
  // 切换一个名称  将this.doCountAir切换成this.$store.getters.countAir
  ...mapGetters({
    doCountAir: 'countAir'
  })
}
```
### 3. mutation

在更改Vuex的store中状态唯一的方法就是提交mutation, mutation类似于事件，每个mutation都有一个字符串的事件类型和一个回调函数。并且这个回调函数的第一个参数会接收state，第二个参数为传递过来的值。

```js
this.$store.commit('increment')
```
```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count
    }
  }
})
```
不能直接的调用mutation handler,相当于事件注册，通过触发一个类型为`increment`的`mutation`时，进而调用此函数。

#### 提交载荷
向`store.commit`传入额外参数，即mutation的载荷

```js
mutation: {
  increment(state, val) {
    state.count + val
  }
}
```
```js
store.commit('increment', 1)
```
大多数情况下载荷传一个对象的形式，这样容易读
```js
store.commit('increment', {})
```
- 直接对象的风格提交(type属性，type为提交的事件类型)
```js
store.commit({
  type: 'increment',
  val: 1
})
```
#### Mutation需要遵循Vue的响应规则
Vuex的store中的状态是响应式的，当更改状态时，组件也会更新，因此Mutation应该和Vue一样遵守一些规则

- 需要的属性要先在state中提前定义好
- 对于数组对象等添加属性时，使用Vue.set,像数组直接修改长度不会生效，Array[index] = 11等

#### 使用常量代替Mutation事件类型
```js
export const mutDoneCount = 'mutDoneCount'
import { mutDoneCount } from './mutation-types'
const store = new Store({
  mutations: {
    [mutDoneCount](state) {
      state.count++
    }
  }
})
```
### 4. Action
Action 类似于 mutation，不同在于：
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。
```js
const store = new Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  action: {
    increment(context) {
      context.commit('increment')
    }
  }
})
```
Action函数接收一个与store具有相同属性和方法的context对象，因此可以调用context.commit提交一个mutation
##### 分发Action(组件中)
Action通过`store.dispatch`方法触发
```js
store.dispath('increment')
```
Action支持载荷和对象方式进行分发
```js
// 载荷
store.dispath('increment', {
  count: 10
})
// 对象方式
store.dispath({
  type: 'increment',
  count: 10
})
```

### 5. Module
由于使用的是单一的状态树,如果放在一起会十分庞大，所以可以分成一个个的模块

此时在组件中获取state, getters等会中间多一层模块
- 模块的局部状态
对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
```js
const moduleA = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```
对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState


对于模块内部的getter, 根节点会以第三个参数暴露出来
```js
const moduleA = {
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```


### 6. 表单处理
在使用Vuex时，如果表单`v-model`绑定的是Vuex的state时，会比较棘手，因为按Vuex每次变化都需要提交(commit), 这样直接绑定是不会实时变化的，
```html
<input v-model="message"/>
```

解决方法1

给`<input>`标签绑定一个value，使用`input`或`change`事件去侦听value的变化，当一发生变化就去提交(commit)
```html
<input :value="message" @input="updateMessage"/>
```
```js
computed: {
  message() {
    return this.$store.state.message
  }
}
methods: {
  updateMessage(e) {
    this.$store.commit('message', e.target.value)
  }
}
```
mutation函数
```js
mutations: {
  message(state, value) {
    state.message = value;
  }
}
```
解决方法2

可以使用计算属性(commputed)的setter方法，当每次值发生变化就进行提交
```js
computed: {
  message: {
    get() {
      return 
    },
    set(val) {
      this.$store.commit('message', val)
    }
  }
}
```


