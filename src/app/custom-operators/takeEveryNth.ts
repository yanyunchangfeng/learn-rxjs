import { interval, Observable } from "rxjs";
import { filter } from "rxjs/operators";
// 自定义操作符 takeEveryNth
{
  const takeEveryNth =
    (n: number) =>
    <T>(source: Observable<T>) =>
      new Observable<T>((observer) => {
        let count = 0;
        return source.subscribe({
          next(x) {
            if (count++ % n === 0) observer.next(x);
          },
          error(err) {
            observer.error(err);
          },
          complete() {
            observer.complete();
          },
        });
      });

  const interval$ = interval(1000).pipe(takeEveryNth(2));
  interval$.subscribe((val) => console.log(val));
}

// 进一步简化，使用现有操作符改写

{
  const takeEveryNthSimple =
    (n: number) =>
    <T>(source: Observable<T>) =>
      source.pipe(filter((value, index) => index % n === 0));
  const interval$ = interval(1000).pipe(takeEveryNthSimple(2));
  interval$.subscribe((val) => console.log(val));
}

// 因为pipeable操作符返回的是函数，还可以进一步简化

{
  const takeEveryNthSimplest = (n: number) =>
    filter((value, index) => index % n === 0);
  const interval$ = interval(1000).pipe(takeEveryNthSimplest(2));
  interval$.subscribe((val) => console.log(val));
}
