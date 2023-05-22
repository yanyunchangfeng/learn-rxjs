import { fromEvent } from "rxjs";
import { find } from "rxjs/operators";
//只发出源 Observable 所发出的值中第一个满足条件的值，然后完成。
// 找到第一个通过测试的值并将其发出。
{
  const clicks$ = fromEvent(document, "click");
  const result$ = clicks$.pipe(
    find((ev) => (ev.target as HTMLElement).tagName === "DIV")
  );
  // 找到第一个点击DIV元素的事件并发射，然后进入完成状态。
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
  // MouseEvent, I'm complete.
}
