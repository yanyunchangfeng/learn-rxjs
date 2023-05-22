import { range } from "rxjs";
// 创建一个 Observable ，它发出指定范围内的数字序列。
{
  //第一个参数为序列的初始值，默认为0，第二个参数为序列的长度，默认为0
  const range$ = range(1, 10);
  range$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });

  // 输出1,2,3...10,I'm complete
}
