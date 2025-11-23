flex 布局即弹性布局，当给某个元素设置 display:flex 后形成了弹性布局，该元素被称为弹性布局，简称容器，该元素下的直接子元素为该容器的成员，简称项目。该容器默认有一条水平的主轴和一个垂直于主轴的交叉轴，主轴的方向可以通过 flex-direction 属性设置。

项目会获得一个默认的初始值

```text
元素排列为一行（flex-direction 属性的初始值是 row）。
元素从主轴的起始线开始。
元素不会在主维度方向拉伸，但是可以缩小。
元素被拉伸来填充交叉轴大小。
flex-basis 属性为 auto。
flex-wrap 属性为 nowrap。
```

### 需要知道的概念

#### 主轴

默认是一个水平方向的轴，可以通过 flex-direction 设置方向

可以取 4 个值：
- row
- row-reverse
- column
- column-reverse

如果选择了 row 或者 row-reverse，主轴将沿着行向延伸。

![flex-direction-row](https://rbr.oss-cn-beijing.aliyuncs.com/cloud_drive/CSS/Flex/flex-direction-row.svg)

选择 column 或者 column-reverse 时，主轴会沿着页面的上下方向延伸——也就是块向。

![flex-direction-column](https://rbr.oss-cn-beijing.aliyuncs.com/cloud_drive/CSS/Flex/flex-direction-column.svg)

#### 交叉轴
垂直于主轴的轴，交叉轴的方向取决于主轴的方向

如果flex-direction（主轴）设成了 row 或者 row-reverse 的话，交叉轴的方向就是沿着上下方向延伸的。

![flex-direction-row](https://rbr.oss-cn-beijing.aliyuncs.com/cloud_drive/CSS/Flex/jiaochazhou-column-row.svg)
如果主轴方向设成了 column 或者 column-reverse，交叉轴就是水平方向。
![flex-direction-column](https://rbr.oss-cn-beijing.aliyuncs.com/cloud_drive/CSS/Flex/jiaochazhou-column.svg)

#### 起始线

#### 终止线

## 容器属性
### flex-direction
用来设置主轴的方向，默认是水平从左向右。当主轴方向改变时交叉轴的方向也会随之改变。

取值：

row：水平从左向右（默认值）

row-reverse: 水平从右向左

column：垂直从上到下

column-reverse：垂直从下到上

### flex-warp

用来设置成员在主轴方向是否换行，默认不换行

取值：

no-warp：不换行（默认值）

warp：换行

warp-reverse：反向换行

### flex-flow

是 flex-direction 和 flex-warp 的一个简写形式。默认 row no-warp

### just-content

用来设置成员在主轴方向的对齐方式

取值：

flex-start：从开头排(默认值)

flex-end：从末尾排

center：居中

space-bettow：第一个元素和最后一个元素靠两边，各个元素两侧的空间平分

space-round：每个元素两侧的空间相等，中间元素相对于两边的两个元素来说会出现两倍空间

space-sd：每个元素间距相等，这样不会出现两边空间

### algin-items

用来设置单行成员在交叉轴的对齐方式

取值：

space-xx：充满，如果是垂直方向，那么高度会占满整个容器的高度，如果是水平方向，那么宽度会占满整个容器的宽度。

flex-start：从开头排

flex-end：从末尾排

center：居中

### algin-content

用来多行成员在交叉轴的排列方式

取值：

flex-start：

flex-end：

center：

space-betto：

space-round：

## 项目属性

### order
用来设置在页面中的排序顺序，值越大越往后

### flex-grow
用来设置放大比例，当有剩余空间时，项目如何放大（该元素获得（伸张）多少正可用空间），值是一个数值，值越大代表放大的比例越大。默认是 0，不放大。

### flex-shrink
用来设置缩小比例，当空间不足时，项目如何缩小（该元素要消除（收缩）多少负可用空间），值是一个数值，值越大代表缩小的比例越大。默认是 1，缩小。

### flex-basis

项目的初始大小，默认是 auto。

- 如果显示设置了宽度或高度那么 auto 就取设置的值
- 如果没有显示设置，则拿具体的内容的空间，取得是 max-content 

### flex

是 flex-grow + flex-shrink + flex-basis的简写形式，默认值是不放大，缩小比例为1，初始化空间为auto (0 1 auto)

常见的简写设置

- flex: initial 
重置为初始值

```css
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
```

- flex: auto
在需要的时候，可以拉伸也可以收缩
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```
- flex: none
设置成不可放大，不可缩小

```css
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
```

- flex: 1或者flex: 2

它相当于flex: 1 1 0 或者 flex: 2 1 0。元素可以在 flex-basis 为 0 的基础上伸缩。

### flex-self
单独设置某个项目的排列方式，也就是可以更改aligin-items整体的排列方式。

取值：

flex-start：从头排序

flex-end：末尾

center：居中


### 需要知道的概念
**正可用空间**

用来决定剩余空间有多少，有了剩余空间，成员会按照grow属性进行分配。

剩余空间的计算方式：

剩余空间 = 容器宽度 - (成员宽度（初始，也就是由flex-basis属性决定）之和)

**例如：**
当一个弹性容器有正可用空间时，它就有更多的空间用于在容器内显示弹性元素。比如说，如果我们有 500px 宽的容器，flex-direction 属性值为 row，三个 100px 宽的弹性元素，那么我们还有 200px 的正可用空间，如果我们想要填充整个容器，则可将其分配到元素中。

![正可用空间](https://rbr.oss-cn-beijing.aliyuncs.com/cloud_drive/CSS/Flex/available-space.png)

**负向空间**

当弹性元素的自然尺寸加起来比弹性容器内的可用空间大时，会产生负可用空间，有了负可用空间，弹性元素会按照flex-shrink属性值进行压缩。

负可用空间计算方式：

负可用空间 = 弹性容器可用空间 - 弹性元素自然尺寸之和（flex-basis）


比如我们有一个像上面那样的 500px 宽的容器，但是三个弹性元素每个都为 200px 宽，那我们就一共需要 600px 宽，因此就有了 100px 的负可用空间。这可以从弹性元素中删除以使其能适应容器。

![负可用空间](https://rbr.oss-cn-beijing.aliyuncs.com/cloud_drive/CSS/Flex/negative-available-space.png)


