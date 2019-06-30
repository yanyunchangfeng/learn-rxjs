import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';
// 缓冲源 Observable 的N个值(N = bufferSize)，然后发出该缓冲区并进行清理，再然后开启一个新的缓存区，新缓存区会新缓存M个值(M = startBufferEvery)。 如果startBufferEvery没有提供或者为null, 新的缓冲会在源开始的时候开启并且在每次发出的时候关闭。
{
    var clicks$ = fromEvent(document, 'click');
    var buffer$ = clicks$.pipe(bufferCount(2));
    // 将最后两次点击事件作为数组发出
    // buffer$.subscribe(val => console.log(val))
}
{
    // 第一个参数bufferSize	 缓存区的最大长度。 第二个参数  startBufferEvery 确定何时启用新的缓冲区
    // 如果startBufferEvery是2, 那么隔一个数据会开一个新 的缓冲区。 默认情况下，将在源的起始处启用新的缓冲区。
    var clicks$ = fromEvent(document, 'click');
    var buffer$ = clicks$.pipe(bufferCount(2, 1));
    // 在每次点击的时候, 以数组的形式发出最后两次点击
    buffer$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=buffer-count.js.map