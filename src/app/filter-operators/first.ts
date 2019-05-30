import {interval} from 'rxjs'
import {first} from 'rxjs/operators';

//过滤类操作符 first 是 take 的一种特殊的表达形式

// filter
{
    const interval$ = interval(1000).pipe(
        first()
    ) // 每隔1000毫秒发射一个值
    interval$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete.')
    )
    // 0 , am complete.
}