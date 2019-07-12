import {fromEvent, interval} from 'rxjs';
import { delayWhen } from 'rxjs/operators';
// 在给定的时间范围内，延迟源 Observable 所有数据项的发送，该时间段由另一个 Observable 的发送决定。
// 就像是delay, 但是延时的时间间隔由第二个Observable决定.
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        delayWhen(ev => interval(Math.random() * 5000))
    )
    //将每次的点击延迟到0-5秒
    result$.subscribe(val => console.log(val));
}