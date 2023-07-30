#  关于时间常见例子 
### 1. 获取当前的时间(年月日时分秒)

返回类型：`2020-10-26 12:01:01`

```js
function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate(); // 天
  let secondes = date.getSeconds(); // 秒
  let hour = date.getHours(); // 时
  let minutes = date.getMinutes(); // 分
  month < 10 ? month = `0${month}` : month;
  secondes < 10 ? secondes = `0${secondes}` : secondes; 
  hour < 10 ? hour = `0${hour}` : hour;
  minutes < 10 ? minutes = `0${minutes}` : minutes;
  day < 10 ? day = `0${day}` : day;
  const timeMessage = `${year}-${month}-${day} ${hour}:${minutes}:${secondes}`;
  return timeMessage;
}
```
### 2. 获取当前的时间(年月日)

返回类型：`2020-10-26`

```js
const getNowDayString = () => {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1 < 10 ? `0${nowDate.getMonth() + 1}` : nowDate.getMonth() + 1;
  const day = nowDate.getDate() < 10 ? `0${nowDate.getDate()}` : nowDate.getDate();
  const nowDay = `${year}-${month}-${day}`;
  return nowDay;
};
```

### 3. 比较两个时间值是否大于多少天(比如90)

参数：
- startTimeCheck 开始日期(格式 2020-01-01)
- endTimeCheck 结束日期(格式 2020-01-01)
- dayNum 天

返回值：Boolean类型


```js
const isMoreThreeMonth = (startTimeCheck, endTimeCheck, dayNum) => {
  const currentDate = new Date(endTimeCheck).toLocaleDateString(); // 结束日期格式化
  const endTimeMilliSecond = new Date(currentDate).getTime(); // 结束日期毫秒值
  const beforeThreeMonth = endTimeMilliSecond - dayNum * 24 * 60 * 60 * 1000; // 3个月之前的毫秒值
  const startTimeMilliSecond = new Date(new Date(startTimeCheck).toLocaleDateString()).getTime(); // 开始时间的毫秒值
  if (startTimeMilliSecond < beforeThreeMonth) {
    // 大于dayNum天
    return true;
  } else {
    return false;
  }
}
```

例子：

```js
const result = isMoreThreeMonth('2020-01-02', '2020-01-02', 90);
```

### 4. 格式化日期

参数：

- date: YYYY-MM-DD或YYYY/MM/DD

- typw: - 或 /

返回：YYYY-MM-DD 或 YYYY/MM/DD

```js
const formattedDate = (date, type) => {
  const arr = date.split(type);
  const year = arr[0]; // 获取当前日期的年份
  const month = (parseInt(arr[1], 10) + 1) < 10 ? `0${parseInt(arr[1], 10) + 1}` : parseInt(arr[1], 10) + 1; // 获取当前日期的月份
  const day = parseInt(arr[2], 10) < 10 ? `0${parseInt(arr[2], 10)}` : arr[2]; // 获取当前日期的日
  return { year, month, day };
};
```
例子：
```js
const result = formattedDate('2020-01-01')
```

### 5. 获取某月的天数

参数:

- date：日期 (2020-01-01或2020/01/01)
- type：`-` 或 `/`

```js
const getDaysOfMonth = (date, type) => {
  const arr = date.split(type);
  const year = arr[0];
  const month = arr[1];
  const days = new Date(year, month, 0).getDate();
  return days;
};
```

例子：

```js
const result = getDaysOfMonth('2020-01-01', '-');
// 返回值 31
```

### 6. 根据传入的日期和天数，获取其中的日期

参数：

- date： 日期
- dateLenght: 天数

```js
const getDayArr = (date, dateLength) => {
  const myDate = new Date(date);
  const dateArray = [];
  let dateTemp;
  for (let i = 0; i < dateLength; i += 1) {
    dateTemp = `${Double((myDate.getMonth() + 1))}-${Double(myDate.getDate())}`;
    dateArray.push(`${myDate.getFullYear()}-${dateTemp}`);
    if (myDate.getMonth() === 11 && myDate.getDate() === 31) {
      myDate.setFullYear(myDate.getFullYear() + 1);
    }
    // 设置月的某一天
    myDate.setDate(myDate.getDate() + 1);
  }
  return dateArray;
};

const Double = (n) => {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
};
```

例子

```js
const result = getDayArr(new Date(), 3);
// ['2021-01-01', '2021-01-02', '2021-01-03'];
```

### 7. 获取上一个月

参数：

- date：yyyy-mm-dd的日期，如：2021-03-01

```js
const getPreMonth = (date) => {
  const arr = date.split('-');
  const year = arr[0]; // 获取当前日期的年份
  const month = arr[1]; // 获取当前日期的月份
  const day = parseInt(arr[2], 10) < 10 ? `0${parseInt(arr[2], 10)}` : arr[2]; // 获取当前日期的日
  let year2 = year;
  let month2 = parseInt(month, 10) - 1;
  if (month2 === 0) {
    year2 = parseInt(year2, 10) - 1;
    month2 = 12;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = `0${month2}`;
  }
  const t2 = `${year2}-${month2}-${day2}`;
  // 当前月的天数
  const monthDay = new Date(year2, month2, 0).getDate();
  // t2 当前的日期
  return {
    date: t2, monthDay,
  };
};
```

例子：

```js
const result = getPreMonth('2021-02-02');
// result = { t2: '2021-01-02', monthDay: 31 }
```

### 8. 获取下个月

- date: yyyy-mm-dd的日期，如：2021-03-01

```js
const getNextMonth = (date) => {
  const arr = date.split('-');
  const year = arr[0]; // 获取当前日期的年份
  const month = arr[1]; // 获取当前日期的月份
  const day = parseInt(arr[2], 10) < 10 ? `0${parseInt(arr[2], 10)}` : arr[2]; // 获取当前日期的日
  let year2 = year;
  let month2 = parseInt(month, 10) + 1;
  if (month2 === 13) {
    year2 = parseInt(year2, 10) + 1;
    month2 = 1;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = `0${month2}`;
  }
  const t2 = `${year2}-${month2}-${day2}`;
  // 当前月的天数
  const monthDay = new Date(year2, month2, 0).getDate();
  // t2 当前的日期
  return {
    date: t2, monthDay,
  };
};
```

例子：

```js
const result = getNextMonth('2021-01-01');
// result = { t2: '2021-02-01', monthDay: 28 }
```

### 9. 倒计时

参数：

- endTime：结束的时间

返回值：时分秒

```js
function countdown (endTime) {
  let today = new Date() // 当前时间
  let stopTime = new Date(endTime) // 结束时间
  let rest = stopTime.getTime() - today.getTime() // 倒计时毫秒数
  let restD = parseInt(rest / (60 * 60 * 24 * 1000)) // 转换为天
  let noDayTimes = parseInt(rest) - parseInt(restD * 60 * 60 * 24 * 1000) // 除去天的毫秒数
  let restH = parseInt(noDayTimes / (60 * 60 * 1000)) // 除去天的毫秒数转换成小时
  let restHours = parseInt(rest / (60 * 60 * 1000)) // 不去除天的毫秒数转换成小时
  let H = noDayTimes - restH * 60 * 60 * 1000 // 除去天、小时的毫秒数
  let restM = parseInt(H / (60 * 1000)) // 除去天的毫秒数转换成分钟
  // M = H - restM*60*1000 // 除去天、小时、分的毫秒数
  let restSeconds = parseInt((rest - (restD * 60 * 60 * 24 * 1000) - restH * (60 * 60 * 1000) - (restM * 60 * 1000)) / 1000) // 除去天、小时、分的毫秒数转化为秒
  if (restM >= 0 && restM <= 9) {
    restM = '0' + restM
  }
  if (restSeconds >= 0 && restSeconds <= 9) {
    restSeconds = '0' + restSeconds
  }
  return restHours + ':' + restM + ':' + restSeconds
}
```

### 10. 现在距过去某个时间点的时间值

参数：

- dateGetTime:  过去的时间戳

返回值：天 + 小时 + 分 + 秒

```js
function timeMethod(dateGetTime) {
    const differTime = new Date().getTime() - dateGetTime;
    const day = parseInt(differTime / 1000 / 60 / 60 / 24); // 天
    const hour = parseInt((differTime / 1000 / 60 / 60) - (day *24)); // 小时
    const minutes = parseInt((differTime / 1000 / 60) - (day * 24 * 60) - (hour * 60)); // 分
    const seconds = parseInt((differTime / 1000) - (day *24 * 60 * 60) - (hour * 60 * 60) - (minutes * 60)); // 秒
    return `${day} - ${hour} - ${minutes} - ${seconds}`;
}
```















