import { fromEvent, interval } from 'rxjs';
import { windowWhen, map, take, mergeAll } from 'rxjs/operators';
// 就像是 bufferWhen, 但是发出的是嵌套的 Observable 而不是数组。
// 返回的 Observable 发出从源 Observable 收集到的项的窗口。 输出 Observable 发出连接的，非重叠的窗口。 
// 每当由指定的 closingSelector 函数产生的 Observable 发出项，它会发出当前窗口并开启一个新窗口。 当输出 Observable 被订阅的时候立马开启第一个窗口。
{
    var clicks$ = fromEvent(document, 'click');
    // 在每个秒速随机(1-5秒)的窗口中，点击document，只发出最开始的两次点击事件
    var result$ = clicks$.pipe(windowWhen(function () { return interval(1000 + Math.random() * 4000); }), map(function (win) { return win.pipe(take(2)); }), mergeAll());
    result$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=window-when.js.map