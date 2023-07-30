# 移动端使用

#### 1. 指示线选中后不会消失，pc端会消失

```js
this.$curChart.dispatchAction({
  type: 'updateAxisPointer',
  currTrigger: 'leave',
});
```

#### 2. 点击任意位置都会触发事件

```js
this.$curChart.getZr().on('mousemove', (params) => {});
```

```js
initChart(canvas, width, height, canvasDpr) {
  this.$curChart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: canvasDpr,
  });
  canvas.setChart(this.$curChart);
  this.$curChart.getZr().off('click');
  this.$curChart.getZr().off('mousemove');
  this.$curChart.setOption(this.ec.option);
  this.$curChart.getZr().on('mousemove', (params) => {
    this.echartsGatherMethod(params);
  });
  this.$curChart.getZr().on('click', (params) => {
    this.echartsGatherMethod(params);
  });
},
// 事件
echartsGatherMethod(params) {
  const point = [params.offsetX, params.offsetY];
  if (this.$curChart.containPixel('grid', point)) {
    const coordinates = this.$curChart.convertFromPixel({ seriesIndex: 0 }, point);
    const op = this.$curChart.getOption();
    // op.series区分多个请求
    if (op.series && op.series.length > 0) {
      if (op.series.length === 1) {
        const xName = op.xAxis[0].data[coordinates[0]]; // x轴名称
        const seriesName = op.series[0].name; // 选中的名称
        const seriesVal = op.series[0].data[coordinates[0]]; // 选中的值
        const objVal = {
          xName, seriesName, seriesVal,
        };
        op.series[0].markLine.data = [{ yAxis: seriesVal }];
        this.$curChart.setOption(op);
        this.$emit('passEchartsMethod', objVal);
      } else {
        this.moreSeries(op, coordinates);
      }
    }
  } else {
    const op = this.$curChart.getOption();
    op.series[0].markLine.data = [];
    if (op.series[1]) {
      op.series[1].markLine.data = [];
    }
    this.$curChart.setOption(op);
  }
},
// 多个series
moreSeries(op, coordinates) {
  const xName = op.xAxis[0].data[coordinates[0]]; // x轴名称
  const seriesOneArr = op.series[0].data; // 第一个series数组值
  const seriesOneName = op.series[0].name; // 第一个series的名称
  const seriesTwoArr = op.series[1].data; // 第二个series数组值
  const seriesTwoName = op.series[1].name; // // 第二个series的名称
  const seriesOneAbs = Math.abs(seriesOneArr[coordinates[0]] - coordinates[1]);
  const seriesTwoAbs = Math.abs(seriesTwoArr[coordinates[0]] - coordinates[1]);
  const opParams = op;
  // 绝对值那个小就取那个值(代表点击的位置距离那个折线比较近)
  if (seriesOneAbs <= seriesTwoAbs) {
    const objVal = {
      xName, seriesName: seriesOneName, seriesVal: seriesOneArr[coordinates[0]],
    };
    opParams.series[0].markLine.data = [{ yAxis: seriesOneArr[coordinates[0]] }];
    opParams.series[1].markLine.data = [];
    this.$curChart.setOption(opParams);
    this.$emit('passEchartsMethod', objVal);
  } else {
    const objVal = {
      xName, seriesName: seriesTwoName, seriesVal: seriesTwoArr[coordinates[0]],
    };
    opParams.series[1].markLine.data = [{ yAxis: seriesTwoArr[coordinates[0]] }];
    opParams.series[0].markLine.data = [];
    this.$curChart.setOption(opParams);
    this.$emit('passEchartsMethod', objVal);
  }
},

```