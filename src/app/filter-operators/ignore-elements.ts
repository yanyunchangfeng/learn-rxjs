import { of } from "rxjs";
import { ignoreElements } from "rxjs/operators";
// 忽略源 Observable 所发送的所有项，只传递 complete 或 error 的调用。
{
  const data$ = of(1, 2, 3, 4);
  const result$ = data$.pipe(ignoreElements());
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  //忽略发射的任何元素，只会进入complete或者error状态
}
