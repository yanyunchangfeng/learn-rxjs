import { fromEvent } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
// 返回一个 Observable， 该 Observable 会跳过由源 Observable 发出的所有满足指定条件的数据项， 但是一旦出现了不满足条件的项，则发出在此之后的所有项。


{
    const clicks$ = fromEvent(document, 'click');
    const result$ = clicks$.pipe(
        skipWhile((ev: MouseEvent) => ev.clientX > 200)
    )
    // 首先会忽略掉鼠标点击位置x>200的事件，一旦出现了鼠标点击位置x<200的事件，后续会发射出所有的点击事件
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
        )
}