import {from} from 'rxjs'
import {last} from 'rxjs/operators';

//过滤类操作符 last 是 take 的一种特殊的表达形式

// last
{
    const interval$ = from([1,2,3,4,5]).pipe(
        last()
    ) // 每隔1000毫秒发射一个值
    interval$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete.')
    )
    // 5 , am complete.
}