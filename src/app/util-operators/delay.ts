import {fromEvent} from 'rxjs';
import { delay } from 'rxjs/operators';
// 通过给定的超时或者直到一个给定的时间来延迟源 Observable 的发送。
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        delay(1000)
    )
    // 每次点击延迟1秒
    result$.subscribe( val=> console.log(val))
}