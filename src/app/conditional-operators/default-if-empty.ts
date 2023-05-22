import { empty, fromEvent, interval } from "rxjs";
import { defaultIfEmpty, takeUntil } from "rxjs/operators";
//如果源 Observable 在完成之前没有发出任何 next 值，则发出给定的值，否则返回 Observable 的镜像。
{
  const emptyDefault$ = empty().pipe(
    defaultIfEmpty("如果源流中无任何元素,我订阅后就输出")
  );
  emptyDefault$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
  // 如果源流中无任何元素,我订阅后就输出
  // I'm complete
}
{
  // 如果在3秒内没有点击事件发生,发出"no clicks"
  const clicks$ = fromEvent(document, "click");
  const clicksBeforeThree$ = clicks$.pipe(takeUntil(interval(3000)));
  const result$ = clicksBeforeThree$.pipe(defaultIfEmpty("no clicks" as any));
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
}
