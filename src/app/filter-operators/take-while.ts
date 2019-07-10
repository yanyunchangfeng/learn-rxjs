import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
// 发出在源 Observable 中满足 predicate 函数的每个值，并且一旦出现不满足 predicate 的值就立即完成。
// 只要当通过给定的条件时才接收源 Observable 的值。 当第一个不满足条件的值出现时，它便完成
{
    const clicks$ = fromEvent(document, 'click');
    const result$ = clicks$.pipe(
        takeWhile((ev: MouseEvent) => ev.clientX > 200)
    )
    //输出鼠标点击位置x坐标大于200的事件，出现不满足的，直接进入完成状态
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
}