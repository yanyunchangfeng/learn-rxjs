import {interval,fromEvent} from 'rxjs';
import { skipUntil } from 'rxjs/operators';
// skipUntil 跳过源Observable的N个值，直到下一个Observalble开始发送
{
    const clicks$ = fromEvent(document,'click');
    const interval$ = interval(1000);
    const result$ = interval$.pipe(
        skipUntil(clicks$)
    )
    // 直到document事件发生，然后输出interval$ 的值
    result$.subscribe(val => console.log(val))
}