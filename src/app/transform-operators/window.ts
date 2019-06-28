import {fromEvent, interval} from 'rxjs';
import { window, take,map, mergeAll } from 'rxjs/operators';
// 就像是 buffer, 但发出的是嵌套的 Observable ，而不是数组。
// 返回的 Observable 发出从源 Observable 收集到的项的窗口。 输出 Observable 发出连接的，不重叠的 窗口.
//  当windowBoundaries Observable 开始发出数据，它会发出目前的窗口并且会打开一个新的。
//  因为每个窗口都是 Observable， 所以输出 Observable 是高阶 Observable。

{
    const clicks$ = fromEvent(document,'click');
    const interval$ = interval(1000);
    // 在每个窗口(窗口间的时间间隔为1秒)中，最多发出两次点击事件
    const result$ = clicks$.pipe(
        window(interval$),
        map(win => win.pipe(take(2))),
        mergeAll()
    )
    result$.subscribe(val => console.log(val))
}