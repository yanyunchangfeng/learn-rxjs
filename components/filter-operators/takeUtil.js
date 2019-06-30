import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
//过滤类操作符 takeUtil 它发出源 Observable 的值，然后直到第二个 Observable (即 notifier )发出项，它便完成。
{
    var interval$ = interval(1000);
    var clicks$ = fromEvent(document, 'click');
    var result$ = interval$.pipe(takeUntil(clicks$));
    result$.subscribe(function (val) { return console.log(val); }, // 0 1,2 ....
    function (// 0 1,2 ....
    err) { return console.log(err); }, function () { return console.log('document 发生click事件，我就完成'); });
}
//# sourceMappingURL=takeUtil.js.map