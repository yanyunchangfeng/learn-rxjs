import { interval } from "rxjs";
import { toArray, take } from "rxjs/operators";
// 装换类操作符toArray将流中的值转换为数组输出
{
  const interval$ = interval(1000);
  const result$ = interval$.pipe(take(10), toArray());
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete."),
  });
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // I'm complete.
}
