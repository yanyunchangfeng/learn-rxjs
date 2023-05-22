import { of } from "rxjs";
import { max } from "rxjs/operators";
//取数据流中最大的值，参数为比较器函数
{
  const data$ = of([0, 0, 0], [0, 0, 0, 0], [0, 0]);
  const result$ = data$.pipe(max((x, y) => x.length - y.length));
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  // [0,0,0,0]
  // I'm complete.
}
