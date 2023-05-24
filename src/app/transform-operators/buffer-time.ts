import { fromEvent } from "rxjs";
import { bufferTime } from "rxjs/operators";
// 在特定时间周期内缓冲源 Observable 的值。
{
  const clicks$ = fromEvent(document, "click");
  const buffer$ = clicks$.pipe(bufferTime(1000));
  // 每一秒都发出最新点击事件的数组
  buffer$.subscribe((val) => console.log(val));
}
{
  // 第一个参数为填满每个缓冲数组的时间。第二个参数为开启新缓冲区的时间间隔。
  // 第三个为缓冲区最大容量，第四个为调度器函数
  const clicks$ = fromEvent(document, "click");
  const buffer$ = clicks$.pipe(bufferTime(2000, 5000));
  // 每5秒钟，发出接下来2秒内的点击事件(译者注：后3秒内的点击会被忽略)zzzz
  buffer$.subscribe((val) => console.log(val));
}
