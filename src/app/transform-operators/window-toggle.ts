import { fromEvent, interval, Observable } from "rxjs";
import { windowToggle, mergeAll } from "rxjs/operators";
// 就像是 bufferToggle, 但是发出的是嵌套 Observable 而不是数组。
// 返回的 Observable 发出从源 Observable 收集到的项的窗口。
// 输出 Observable 发出窗口 ，每一个窗口 包括当 openings 发出时开始收集源 Observable 的数据项并且 closingSelector 返回的 Observable 发出项时结束收集。
{
  // 点击document，每隔一秒钟, 发出接下来 500ms 的点击事件。
  const clicks$ = fromEvent(document, "click");
  const interval$ = interval(1000);
  const result$ = clicks$.pipe(
    windowToggle(interval$, (i) =>
      i % 2
        ? interval(500)
        : new Observable<never>((subscriber) => subscriber.complete())
    ),
    mergeAll()
  );
  result$.subscribe((val) => console.log(val));
}
