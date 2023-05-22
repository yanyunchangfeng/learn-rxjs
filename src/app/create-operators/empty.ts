import { Observable } from "rxjs";
// Empty = > 不发射任何元素，流里没有元素,直接进入complete 状态 有结束
{
  const neverStream$ = new Observable<never>((subscriber) =>
    subscriber.complete()
  );

  neverStream$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
  // I am complete.
}
