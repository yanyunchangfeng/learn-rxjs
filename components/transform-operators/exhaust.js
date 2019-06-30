import { fromEvent, interval } from 'rxjs';
import { map, take, exhaust } from 'rxjs/operators';
// exhaust 订阅发出 Observables 的 Observable，也就是高阶 Observable 。
//  每次观察到这些已发出的内部 Observables 中的其中一个时，输出 Observable 开始发出该内部 Observable 要发出的项。到目前为止，它的行为就像 mergeAll 。
// 然而，如果前一个 Observable 还未完成的话，exhaust 会忽略每个新的内部 Observable 。一旦完成，它将接受并打平下一个 内部 Observable ，然后重复此过程。
{
    var clicks$ = fromEvent(document, 'click');
    var result$ = clicks$.pipe(map(function (ev) { return interval(1000).pipe(take(5)); }), exhaust());
    // 只要没有当前活动的计时器，那么每次点击就会运行一个有限的计时器
    result$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=exhaust.js.map