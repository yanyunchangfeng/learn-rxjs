import { interval } from "rxjs";
import { take } from "rxjs/operators";

//过滤类操作符 take

// filter
{
  const interval$ = interval(1000).pipe(take(5)); // 每隔1000毫秒发射一个值
  interval$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  // 0,1,2,3,4,I am complete.
}
