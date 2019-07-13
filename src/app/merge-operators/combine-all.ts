import { interval, fromEvent } from 'rxjs';
import { take, map, combineAll } from 'rxjs/operators';
// 通过等待外部 Observable 完成然后应用 combineLatest ，将高阶 Observable 转化为一阶 Observable。
// 当高阶 Observable 完成时，通过使用 combineLatest 将其打平。


{
    const interval$ = interval(1000).pipe(
        take(2)
    )
    const result$ = interval$.pipe(
        map(val => interval(1000).pipe(
            map(i => `Result (${val}):${i}`),
            take(5)
        )),
        combineAll()
    )

    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    /*
    output:
    ["Result (0): 0", "Result (1): 0"]
    ["Result (0): 1", "Result (1): 0"]
    ["Result (0): 1", "Result (1): 1"]
    ["Result (0): 2", "Result (1): 1"]
    ["Result (0): 2", "Result (1): 2"]
    ["Result (0): 3", "Result (1): 2"]
    ["Result (0): 3", "Result (1): 3"]
    ["Result (0): 4", "Result (1): 3"]
    ["Result (0): 4", "Result (1): 4"]
    I'm complete.
    */
}

{
    // 将两个点击事件映射为有限的 interval Observable，然后应用 combineAll
    const clicks$ = fromEvent(document, 'click');
    const result$ = clicks$.pipe(
        map(ev => interval(1000).pipe(
            take(3)
        )),
        take(2),
        combineAll()
    )
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    //[0,0]
    //[1,0]
    //[1,1]
    //[2,1]
    //[2,2]
    // I'm complete.
}