import {range} from 'rxjs';
import { skipLast } from 'rxjs/operators';
// 跳过源Observable的N项，不作输出
{
    const data$ = range(1,5);
    const result$ = data$.pipe(
        skipLast(2)
    )
    // 跳过有多个值的 Observable 的最后2个值
    result$.subscribe(val => console.log(val))
    // 1,2,3
}