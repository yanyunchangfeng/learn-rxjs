import { fromEvent, interval, range } from "rxjs";
import { count, takeUntil } from "rxjs/operators";
// 计算源的发送数量，并当源完成时发出该数值。
// 当源完成的时候，告知总共发送了多少个值。

{
  // 记录第一次点击之前经过了几秒,点击后直接进入完成状态
  const clicks$ = fromEvent(document, "click");
  const interval$ = interval(1000);
  const secondsBeforeClick$ = interval$.pipe(takeUntil(clicks$));
  const result$ = secondsBeforeClick$.pipe(count());
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
}
{
  // 记录1-7中有多少偶数
  const number$ = range(1, 7);
  const result$ = number$.pipe(count((val) => val % 2 === 0));
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
  // 3, I'm complete.
}
