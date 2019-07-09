import {fromEvent, of} from 'rxjs';
import { mapTo, expand, delay, take } from 'rxjs/operators';
// 递归地将每个源值投射成 Observable，这个 Observable 会被合并到输出 Observable 中。
// 它与 mergeMap 类似，但将投射函数应用于每个源值 以及每个输出值。它是递归的。
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        mapTo(1),
        expand( val => of ( 2 * val ).pipe(
            delay(1000)
        )),
        take(10)
    )
    // 每次点击开始发出的值都是乘以2的，最多连乘10次
    // 1
    // 2
    // 4
    // 8
    // 16
    // 32
    // 64
    // 128
    // 256
    // 512
    result$.subscribe(val => console.log(val))
}