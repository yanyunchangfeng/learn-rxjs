import {fromEvent, interval} from 'rxjs';
import { bufferWhen } from 'rxjs/operators';
// 缓冲源 Observable 的值, 使用关闭 Observable 的工厂函数来决定何时关闭、发出和重置缓冲区。
// 将过往的值收集到数组中， 当开始收集数据的时候, 调用函数返回 Observable, 该 Observable 告知何时关闭缓冲区并重新开始收集。
// 立马开启缓冲区, 然后当closingSelector函数返回的observable发出数据的时候关闭缓冲区. 当关闭缓冲区的时候, 会立马开启新的缓冲区，并不断重复此过程。
{
    const clicks$ = fromEvent(document,'click');
    const buffer$ = clicks$.pipe(
        bufferWhen(()=>interval(1000+Math.random()*4000))
    )
    // 发出每个随机秒(1-5秒)数内的最新点击事件数组。
    buffer$.subscribe(val => console.log(val))
}