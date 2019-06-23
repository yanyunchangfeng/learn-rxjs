import {concatMapTo, take} from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
// 不管源值是多少都将其映射为给定的innerObservable, 然后将其打平（降维）为单个 Observable,也就 是所谓的输出 Observable,在输出 Observable 上发出的每个新的 innerObservable 实例与 先前的 innerObservable 实例相连接。
{
    // 每次点击都会触发从0到3的定时器(时间间隔为1秒)，定时器之间是串行的
    const clicks$ = fromEvent(document,'click').pipe(
        concatMapTo(
            interval(1000).pipe(
            take(3)
            )
        )
    )
    clicks$.subscribe(val=>console.log(val))
    // 结果如下:
   // (结果不是并行的)
  // 对于"document"对象上的点击事件，都会以1秒的间隔发出从0到2的值
 // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 
}