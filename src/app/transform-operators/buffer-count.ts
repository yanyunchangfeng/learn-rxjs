import {fromEvent} from 'rxjs'
import { bufferCount } from 'rxjs/operators';
// 缓冲源 Observable 的N个值(N = bufferSize)，然后发出该缓冲区并进行清理，再然后开启一个新的缓存区，新缓存区会新缓存M个值(M = startBufferEvery)。 如果startBufferEvery没有提供或者为null, 新的缓冲会在源开始的时候开启并且在每次发出的时候关闭。


{
    const clicks$ = fromEvent(document,'click');
    const buffer$ = clicks$.pipe(
        bufferCount(2)
    )
    // 将最后两次点击事件作为数组发出
    // buffer$.subscribe(val => console.log(val))
}

{
    const clicks$ = fromEvent(document,'click');
    const buffer$ = clicks$.pipe(
        bufferCount(2,1)
    )
    // 在每次点击的时候, 以数组的形式发出最后两次点击
    buffer$.subscribe(val => console.log(val))
}