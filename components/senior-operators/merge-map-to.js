import { fromEvent, interval } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';
// 将每个源值映射成给定的 Observable ：innerObservable ，而无论源值是什么，然后 将这些结果 Observables 合并到单个的 Observable ，也就是输出 Observable 。
{
    // 对于每次点击事件，都开启一个时间间隔为1秒的 interval Observable
    var clicks$ = fromEvent(document, 'click').pipe(mergeMapTo(interval(1000)));
    clicks$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=merge-map-to.js.map