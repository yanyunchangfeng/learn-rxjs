import { interval, Subject, ConnectableObservable } from 'rxjs';
import { take, tap, mapTo, multicast } from 'rxjs/operators';
// 返回的 Observable 发出对 ConnectableObservable 发出的项调用一个指定的 selector 函数的结果， ConnectableObservable 可以在潜在的多个流之间共享单个 subscription 。
// “多播 Observable” 通过 Subject 来发送通知，这个 Subject 可能有多个订阅者，然而普通的 “单播 Observable” 只发送通知给单个观察者
// 多播 Observable 在底层是通过使用 Subject 使得多个观察者可以看见同一个 Observable 执行。
{
    const source$ = interval(1000).pipe(
        take(5)
    )
    const example = source$.pipe(
        tap(() => console.log('Side Effect #1')),
    )
    const multi = example.pipe(
        multicast(() => new Subject())
    )
    const sub1 = multi.subscribe(val => console.log(val));
    const sub2 = multi.subscribe(val => console.log(val));

    (multi as any).connect()

    //  Side Effect #1
    //  0
    //  0
    // Side Effect #1
    //  1
    //  1
    // Side Effect #1
    //  2
    //  2
    // Side Effect #1
    //  3
    //  3
    // Side Effect #1
    //  4
    //  4
}
