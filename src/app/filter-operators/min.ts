import {of} from 'rxjs';
import { min } from 'rxjs/operators';
//取数据流中最小的值
{
    const data$ = of(99,29,19);
    const result$ = data$.pipe(
        min()
    )
    result$.subscribe(
        val=>console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    // 19
    // I'm complete.
}