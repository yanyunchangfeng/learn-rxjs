import {fromEvent} from 'rxjs';
import {windowTime, mergeAll} from 'rxjs/operators'
// 就像是 bufferTime, 但是返回嵌套的 Observable 而不是数组
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        windowTime(1000),
        mergeAll()
    ) 
    //  每一秒都发出最新点击事件
    // result$.subscribe( val => console.log(val))
}
{
    // 第一个参数为窗口的时间。第二个参数为窗口开启的时间间隔。
    // 第三个为窗口的最大容量，第四个为窗口调度器函数
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        windowTime(2000,5000),
        mergeAll()
    ) 
    // 点击document，每5秒钟，发出接下来2秒内的点击事件(译者注：后3秒内的点击会被忽略)
    result$.subscribe( val => console.log(val))
}