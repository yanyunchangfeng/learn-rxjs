import {fromEvent} from 'rxjs';
import { timestamp } from 'rxjs/operators';
// 工具类操作符timestamp(时间戳) 以对象的方式输出流中的数据value 和时间戳(timestamp)
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        timestamp()
    )
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    // Timestamp {value: MouseEvent, timestamp: 1567133946618}
    // timestamp: 1567133946618
    // value: MouseEvent {isTrusted: true, screenX: 530, screenY: 303, clientX: 435, clientY: 165, …}
    // __proto__: Object
}