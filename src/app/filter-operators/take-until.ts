import { interval, fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";
//过滤类操作符 takeUtil 它发出源 Observable 的值，然后直到第二个 Observable (即 notifier )发出项，它便完成。
{
  const interval$ = interval(1000);
  const clicks$ = fromEvent(document, "click");
  const result$ = interval$.pipe(takeUntil(clicks$));
  result$.subscribe({
    next: (val) => console.log(val), // 0 1,2 ....
    error: (err) => console.log(err),
    complete: () => console.log("document 发生click事件，我就完成"),
  });
}
