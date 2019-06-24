import {interval, fromEvent} from 'rxjs';
import {buffer} from 'rxjs/operators'
// 将 Observable 发出的值缓冲起来直到 closingNotifier 发出数据, 在这个时候在输出 Observable 上发出该缓冲区的值并且内部开启一个新的缓冲区, 等待下一个closingNotifier的发送。
{
    const clicks$ = fromEvent(document,'click');
    const interval$ = interval(1000);
    const buffer$ = interval$.pipe(
        buffer(clicks$)
    )
    // 每次点击发出 interval Observable 最新缓冲的数组。
    buffer$.subscribe( val => console.log(val))
}