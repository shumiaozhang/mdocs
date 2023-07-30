## 组件生命周期方法

#### onLaunch()

> 对应小程序的onLaunch

#### componentDidShow

> 对应小程序的onShow

#### componentDidHide

> 对应小程序的onHide

## 页面生命周期方法

#### onLoad(options)

> 小程序对应的onLoad

在此生命周期内可以通过访问`options`参数或者调用`getCurrentInstance().router`访问到页面路由参数

模拟从`index`页面向`demo`跳转并传参`id=1`

```ts
// pages/index/index.ts
goPage () {
  Taro.navigateTo({
        url: '/pages/demo/index?id=1'
    })
  }

  render () {
    return (
        <View>
        <Button type='primary' onClick={() => this.goPage()}>这是div标签</Button>
    </View>
  )
}
```



```ts
// pages/demo/index.ts
onLoad(options) {
    console.log(options, 'options');
    const params = Taro.getCurrentInstance().router?.params;
    console.log(params, 'params');
}
```

<img src="D:\Download\softwareDownload\微信公众号\2022.9.10\1.onLoad.png" alt="load" style="zoom:43%;" />

#### onReady()

> 小程序对应的onReady

可以从此生命周期内使用`createCanvasContext` 或 `createSelectorQuery` 等 API 访问小程序渲染层的 DOM 节点。

页面内的子组件是不存在`onReady`函数的，如果子组件想获取页面渲染层的节点，可以使用Taro内置的监听事件或者`Taro.nextTick`

```js
import React from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
  $instance = getCurrentInstance()

  componentWillMount () {
    const onReadyEventId = this.$instance.router.onReady
    eventCenter.once(onReadyEventId, () => {
      console.log('onReady')

      // onReady 触发后才能获取小程序渲染层的节点
      Taro.createSelectorQuery().select('#only')
        .boundingClientRect()
        .exec(res => console.log(res, 'res'))
    })
  }
  componentDidMount () {
    Taro.nextTick(() => {
      // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
      Taro.createSelectorQuery().select('#only')
        .boundingClientRect()
        .exec(res => console.log(res, 'res'))
    })
  }  

  render () {
    return (
      <View id="only">
      </View>
    )
  }
}
```

#### componentWillMount()

在组件在装载发生前被立刻调用。

页面组件渲染到 Taro 的虚拟 DOM 之前触发。

#### componentDidMount()

在组件被装载后立即调用。初始化使得 DOM 节点应该进行到这里。若你需要从远端加载数据，这是一个适合实现网络请求的地方。在该方法里 `setState()` 将会触发重新渲染。

页面组件渲染到 Taro 的虚拟 DOM 之后触发。

此时能访问到 Taro 的虚拟 DOM（使用 React ref、document.getElementById 等手段），并支持对其进行操作（设置 DOM 的 style 等）

#### componentDidShow()

> 小程序的onShow()

切换前台

#### componentDidHide()

> 小程序中的onHide()

切换后台

#### onUnload()

> 小程序中的onUnload

卸载

#### componentWillUnmount()

页面卸载

#### onPullDownRefresh ()

监听用户下拉动作。

- 需要在全局配置的 window 选项中或页面配置中设置 `enablePullDownRefresh: true`。
- 可以通过 [Taro.startPullDownRefresh](https://taro-docs.jd.com/taro/docs/apis/ui/pull-down-refresh/startPullDownRefresh) 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
- 当处理完数据刷新后，[Taro.stopPullDownRefresh](https://taro-docs.jd.com/taro/docs/apis/ui/pull-down-refresh/stopPullDownRefresh) 可以停止当前页面的下拉刷新.

#### onReachBottom ()

监听用户上拉触底事件。

- 可以在全局配置的 window 选项中或页面配置中设置触发距离 `onReachBottomDistance`。
- 在触发距离内滑动期间，本事件只会被触发一次

> 需要 `enablePullDownRefresh` 配置

















