### 1. 在页面中引入图片

- 网络图片

```ts
<Image className='img1' src='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg' />
```

- 本地图片

```tsx
<Image className='img1' src={require('../../static/images/withing.png')} />
```

- 引入变量

```tsx
import withing from '../../static/images/withing.png';
<Image className='img1' src={withing} />
```

