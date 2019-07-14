import {of, interval} from 'rxjs';
import { repeatWhen ,take} from 'rxjs/operators';
//repeaWhen  条件满足,返回的Observable重复由源 Observable 所发出的项的流，。
{
    const data$ = of("https://yanyunchangfeng.com");
    const result$ = data$.pipe(
        repeatWhen(() => interval(1000).pipe(take(3)))
    )
    result$.subscribe( 
        val => console.log(val),
        err => console.log(err),
        () => console.log(" I'm complete.")
    )
    // 先输出一次，每隔一秒再输出一次
    // https://yanyunchangfeng.com
    
    // https://yanyunchangfeng.com
    // https://yanyunchangfeng.com
    // https://yanyunchangfeng.com
    // I'm complete.
}