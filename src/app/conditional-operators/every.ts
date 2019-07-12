import {of} from 'rxjs';
import { every } from 'rxjs/operators';
// every 接受一个函数参数，满足所有条件，返回true，不满足返回false
{
    const data$ = of(2,4,6,8);
    const result$ = data$.pipe(
        every(val=>val%2 ===0)
    )
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    // true, I'm complete.
}