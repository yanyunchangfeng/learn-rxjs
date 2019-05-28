import { interval } from 'rxjs';
import {take} from 'rxjs/operators'

{
    const interval$ = interval(1000) // 每隔1000毫秒发射一个值
    interval$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete')
    )
    // 0,1,2......
}

{
    const interval$ = interval(1000).pipe(take(3)) // 每隔1000毫秒发射一个值
    interval$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete')
    )
    // 0,1,2,I am complete
}