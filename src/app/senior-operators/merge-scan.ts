import {mergeScan, mapTo} from 'rxjs/operators'
import { fromEvent, of } from 'rxjs';
// 在源 Observable 上应用 accumulator 函数，其中 accumulator 函数本身返回 Observable ，然后每个返回的中间 Observable 会被合并到输出 Observable 中。
// 它很像 scan，但 accumulator 函数返回的 Observables 会被合并到外部 Observalbe 中。
{
    const clicks$ = fromEvent(document,'click').pipe(
        mapTo(1),
        mergeScan((accu,one) => of(accu + one),0)
    )
    clicks$.subscribe(
        val => console.log(val)
    )
    // 结果：
   // 1 
  // 2
 // 3
// 4
// ...以此类推，每次点击计数增加1
}