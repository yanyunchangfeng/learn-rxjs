import { fromEvent } from 'rxjs';
import { windowCount, map, skip, mergeAll } from 'rxjs/operators';
// 就像是 bufferCount, 但是返回嵌套的 Observable 而不是数组
// 返回的 Observable 发出从源 Observable 收集到的项的窗口。 输出 Observable 每M(M = startWindowEvery)个项发出新窗口，每个窗口包含的项数不得超过N个(N = windowSize)。
//  当源 Observable 完成或者遇到错误,输出 Observable 发出当前窗口并且传播从源 Observable 收到的通知。
//  如果没有提供 startWindowEvery ，那么在源 Observable 的起始处立即开启新窗口，并且当每个窗口的大小达到 windowSize 时完成
{
    // 从第一个点击事件开始，忽略第3N次点击
    var clicks$ = fromEvent(document, 'click');
    var result$ = clicks$.pipe(windowCount(3), map(function (win) { return win.pipe(skip(1)); }), mergeAll());
    // result$.subscribe(val => console.log(val))
}
{
    // 从第三个点击事件开始，忽略第3N次点击
    var clicks$ = fromEvent(document, 'click');
    var result$ = clicks$.pipe(windowCount(2, 3), mergeAll());
    result$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=window-count.js.map