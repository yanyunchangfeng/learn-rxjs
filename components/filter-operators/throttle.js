import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';
// throttle节流 ，频繁触发事件时，在一定时间内只执行一次
{
    var scroll$ = fromEvent(window, 'scroll');
    var result$ = scroll$.pipe(throttle(function () { return interval(1000); }) //时间可以是非固定的，随着条件做动态化,
    );
    // 当滚动时间频繁触发时，一秒钟执行一次
    result$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=throttle.js.map