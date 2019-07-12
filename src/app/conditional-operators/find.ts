import { fromEvent } from 'rxjs';
import { find} from 'rxjs/operators'
//只发出源 Observable 所发出的值中第一个满足条件的值，然后完成。
// 找到第一个通过测试的值并将其发出。
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        find(ev => (ev.target as HTMLElement).tagName ==='DIV' )
    )
    // 找到第一个点击DIV元素的事件并发射，然后进入完成状态。
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log(" I'm complete.")
    );
    // MouseEvent, I'm complete.
}