import { Observable, noop } from "rxjs";

// Never = > 不发射任何元素，流里没有任何元素,不结束,就是一个空的，没有状态的
{
  const neverStream$ = new Observable<never>(noop);
  neverStream$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
  // 没有元素，既不输出，也不结束
}
