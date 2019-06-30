import { fromEvent, interval } from 'rxjs';
import { mergeAll, map, take } from 'rxjs/operators';
// mergeAll 高阶操作符拍扁，降维
{
    // 为每个点击事件创建一个新的 interval Observable ，并将其输出混合为一个 Observable
    var click$ = fromEvent(document, 'click');
    var result$ = click$.pipe(map(function () { return interval(1000); }), mergeAll());
    // result$.subscribe(val => console.log(val))
}
{
    // 参数concurrent ? 可以同时订阅的输入 Observables 的最大数量
    var click$ = fromEvent(document, 'click');
    var result$ = click$.pipe(map(function () { return interval(1000).pipe(take(10)); }), mergeAll(2));
    // 每次点击都会从0到9计数(每秒计数一次)，但只允许最多同时只能有两个计时器
    result$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=merge-all.js.map