import { fromEvent } from 'rxjs';
import { findIndex} from 'rxjs/operators'
//只发出源 Observable 所发出的值中第一个满足条件的值的索引，而不是值本身，然后完成。
// 它很像 find , 但发出的是找到的值的索引， 而不是值本身。
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        findIndex(ev => (ev.target as HTMLElement).tagName ==='DIV' )
    )
    // 找到第一个点击DIV元素的事件的索引并发射，然后进入完成状态。
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log(" I'm complete.")
    );
    //0 , I'm complete.
}