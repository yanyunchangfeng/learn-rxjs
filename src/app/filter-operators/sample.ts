import {fromEvent,interval} from 'rxjs';
import {sample} from 'rxjs/operators';
// 发出源 Observable 最新发出的值当另一个 notifier Observable发送时。
// 就像是 sampleTime， 但是无论何时notifier Observable 进行了发送都会去取样。
// 无论何时 notifier Observable 发出一个值或者完成，  
// sample 会去源 Observable 中发送上次 取样后源 Observable 发出的最新值， 除非源在上一次取样后没有发出值。 
// notifier会被订阅只要输出 Observable 被订阅。


{
    // 每次点击， 取样最新的 "interval$" 的值
    const clicks$ = fromEvent(document,'click');
    const interval$ = interval(1000);
    const result$ = interval$.pipe(
        sample(clicks$)
    )
    result$.subscribe( val => console.log(val))
}