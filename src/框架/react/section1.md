# 评论列表案例

## 创建容器组件 - 评论列表组件
```jsx
class CmtList extends React.Component {
  constructor(props) {
    super(props)
    // 定义评论列表的私有数据
    this.state = {}
  }

  render() {
    return <div>这里写评论列表组件的UI结构</div>
  }
}
```

## 定义评论列表数据
在评论列表的 `constructor` 中的 `this.state` 内，定义如下评论列表数据：
```javascript
list: [
    { id: 1, user: '张三', content: '哈哈，沙发' },
    { id: 2, user: '李四', content: '哈哈，板凳' },
    { id: 3, user: '王五', content: '哈哈，凉席' },
    { id: 4, user: '赵六', content: '哈哈，砖头' },
    { id: 5, user: '田七', content: '哈哈，楼下山炮' }
]
```

## 创建展示组件 - 评论项组件
```jsx
function CmtItem(props) {
  return <div>这里书写评论项组件的UI结构</div>
}
```

## map 函数循环生成子组件
1. 在 `CmtList` 组件中导入 `CmtItem` 组件；
2. 在 `CmtList` 组件中使用 map 函数循环生成 `CmtItem` 组件，代码如下：
```jsx
render() {
    return <div>
      {this.state.list.map(item => {
        return <CmtItem {...item} key={item.id}></CmtItem>
      })}
    </div>
}
```