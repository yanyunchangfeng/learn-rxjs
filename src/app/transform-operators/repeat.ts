import {of} from 'rxjs';
import { repeat } from 'rxjs/operators';
//repeat  返回的 Observable 重复由源 Observable 所发出的项的流，最多可以重复 count 次。
{
    const data$ = of("https://yanyunchangfeng.com");
    const result$ = data$.pipe(
        repeat(3)
    )
    result$.subscribe( 
        val => console.log(val),
        err => console.log(err),
        () => console.log(" I'm complete.")
    )
    // https://yanyunchangfeng.com
    // https://yanyunchangfeng.com
    // https://yanyunchangfeng.com
    // I'm complete.

}