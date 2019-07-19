import { interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';
// timeInterval返回一个TimeInterval对象,但是创建的时间值是不精确的。
{
    const interval$ = interval(1000)
    const result$ = interval$.pipe(timeInterval())
    result$.subscribe(val=>console.log(val))
    // TimeInterval {value: 0, interval: 1005}
    // TimeInterval {value: 1, interval: 999}
    // TimeInterval {value: 2, interval: 1000}
    // TimeInterval {value: 3, interval: 1002}
    // TimeInterval {value: 4, interval: 998 }
} 