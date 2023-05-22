import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
// throttleTime 节流 ，频繁触发事件时，在一定时间内只执行一次
{
  const scroll$ = fromEvent(window, "scroll");
  const result$ = scroll$.pipe(throttleTime(1000));
  // 当滚动时间频繁触发时，一秒钟执行一次
  result$.subscribe((val) => console.log(val));
}
