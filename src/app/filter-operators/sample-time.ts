import {fromEvent} from 'rxjs';
import {sampleTime} from 'rxjs/operators';
// 在周期时间间隔内发出源 Observable 发出的最新值。
// 在周期时间间隔内取样源 Observable ， 发出取样的。
// sampleTime 周期性的查看源 Observable 并且发出上次取样后发出的最新的值， 除非上次取样后 就没有再发出数据了。 
// 取样在每个周期毫秒(或者时间单位由可选的调度器参数决定)内定期发生。 只要 输出 Observable 被订阅取样就开始。
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        sampleTime(1000)
    )
    //每秒， 发出最近的一个点击
    result$.subscribe( val => console.log(val))
}