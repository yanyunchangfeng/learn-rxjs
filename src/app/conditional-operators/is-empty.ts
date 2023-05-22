import { of } from "rxjs";
import { isEmpty } from "rxjs/operators";
// 如果源 Observable 是空的话，它返回一个发出 true 的 Observable，否则发出 false 。
{
  const isEmpty$ = of();
  const result$ = isEmpty$.pipe(isEmpty());
  result$.subscribe(
    (val) => console.log(val),
    (err) => console.log(err),
    () => console.log("I'm complete.")
  );
  // true
  // I'm complete.
}
{
  const isEmpty$ = of("燕云长风");
  const result$ = isEmpty$.pipe(isEmpty());
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I am complete."),
  });
  // false
  // I'm complete.
}
