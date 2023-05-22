import { fromEvent } from "rxjs";
import { elementAt } from "rxjs/operators";
//只发出单个值，这个值位于源 Observable 的发送序列中的指定 index 处。
// 只发出第i个值, 然后完成。
{
  const clicks$ = fromEvent(document, "click");
  const result$ = clicks$.pipe(elementAt(2));
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  //只取第三次点击的事件，然后完成，其他点击被忽略。
}
