import { interval } from "rxjs";
import { take } from "rxjs/operators";
// interval 创建类操作符
{
  const interval$ = interval(1000); // 每隔1000毫秒发射一个值
  interval$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete"),
  });
  // 0,1,2......
}

{
  // pipe 辅助函数，它存在于Observable 上，它缓解了操作符不在原型上所带来的问题。同时可以大大减少应用中RxJS的打包尺寸
  // take函数用于取流中的元素数量
  const interval$ = interval(1000).pipe(take(3)); // 每隔1000毫秒发射一个值，只取前三个
  interval$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete"),
  });
  // 0,1,2,I am complete.
}
