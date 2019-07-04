import {fromEvent, interval} from 'rxjs';
import {auditTime} from 'rxjs/operators';
// auditTime 和 throttleTime 很像, 但是发出沉默时间窗口的最后一个值, 而不是第一个。
// 当它看见一个源值，它会在接下来的 duration 毫秒内忽略这个值以及接下来的源值，过后发出最新的源值。
{
   // 以每秒最多点击一次的频率发出点击事件
   const clicks$ = fromEvent(document,'click');
   const result$ = clicks$.pipe(
       auditTime(1000)
   )
   result$.subscribe(value => console.log(value))
}