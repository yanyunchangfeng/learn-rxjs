import { materialize, map } from "rxjs/operators";
import { of } from "rxjs";
//将源Observable中的值转为通知对象发射，如遇源Observable出错，也是以通知对象错误类型的形式发射
{
  const data$ = of("y", "y", "c", "f", 24);
  const result$ = data$.pipe(
    map((x: any) => x.toUpperCase()),
    materialize()
  );
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  // Notification {kind: "N", value: "Y", error: undefined, hasValue: true}
  // Notification {kind: "N", value: "Y", error: undefined, hasValue: true}
  // Notification {kind: "N", value: "C", error: undefined, hasValue: true}
  // Notification {kind: "N", value: "F", error: undefined, hasValue: true}
  //     Notification {kind: "E", value: undefined, error: TypeError: x.toUpperCase is not a function
  //     at MapSubscriber.project (http://localhost:3001/main…, hasValue: false}
  // error: TypeError: x.toUpperCase is not a function at MapSubscriber.project (http://localhost:3001/main.bundle.js:23060:113) at MapSubscriber.../../node_modules/rxjs/_esm5/internal/operators/map.js.MapSubscriber._next (http://localhost:3001/main.bundle.js:8605:35) at MapSubscriber.../../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next (http://localhost:3001/main.bundle.js:3569:18) at Observable._subscribe (http://localhost:3001/main.bundle.js:14215:24) at Observable.../../node_modules/rxjs/_esm5/internal/Observable.js.Observable._trySubscribe (http://localhost:3001/main.bundle.js:2951:25) at Observable.../../node_modules/rxjs/_esm5/internal/Observable.js.Observable.subscribe (http://localhost:3001/main.bundle.js:2937:22) at MapOperator.../../node_modules/rxjs/_esm5/internal/operators/map.js.MapOperator.call (http://localhost:3001/main.bundle.js:8588:23) at Observable.../../node_modules/rxjs/_esm5/internal/Observable.js.Observable.subscribe (http://localhost:3001/main.bundle.js:2932:31) at MaterializeOperator.../../node_modules/rxjs/_esm5/internal/operators/materialize.js.MaterializeOperator.call (http://localhost:3001/main.bundle.js:8690:23) at Observable.../../node_modules/rxjs/_esm5/internal/Observable.js.Observable.subscribe (http://localhost:3001/main.bundle.js:2932:31)
  // hasValue: false
  // kind: "E"
  // value: undefined
  // I'm complete.
}
