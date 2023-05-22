import { throwError } from "rxjs";
// throwError = > 不发射任何元素，流里没有元素，直接进入error 状态
{
  const errStream$ = throwError(() => {
    return new Error("出错了");
  });
  errStream$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err, "error"),
    complete: () => console.log("I am complete."),
  });
  // 出错了
}
