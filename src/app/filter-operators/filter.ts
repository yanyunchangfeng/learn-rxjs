import { interval } from "rxjs";
import { filter } from "rxjs/operators";

//过滤类操作符 filter

// filter
{
  const interval$ = interval(1000).pipe(filter((value) => value % 2 === 0)); // 每隔1000毫秒发射一个值
  interval$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  // 0 , 2 , 4 ...
}
