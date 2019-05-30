import {interval} from 'rxjs'
import {skip} from 'rxjs/operators';

//过滤类操作符 skip 省略掉前面多少个元素

// skip
{
    const interval$ = interval(1000).pipe(
        skip(3)
    ) // 每隔1000毫秒发射一个值
    interval$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete.')
    )
    // 3,4,5....
}