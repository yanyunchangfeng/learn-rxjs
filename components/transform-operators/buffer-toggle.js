import { fromEvent, interval, empty } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';
// 缓冲源 Observable 的值，openings 发送的时候开始缓冲，closingSelector 发送的时候结束缓冲。
// 将过往数据收集到数组中. 当opening发送的时候开始收集, 然后调用closingSelector 函数获取 Observable ，该Observable 告知什么时候关闭缓冲。
{
    var clicks$ = fromEvent(document, 'click');
    var interval$ = interval(1000);
    var buffer$ = clicks$.pipe(bufferToggle(interval$, function (i) { return i % 2 ? interval(500) : empty(); }));
    // 每隔一秒钟，发出接下来500毫秒内的点击事件。
    buffer$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=buffer-toggle.js.map