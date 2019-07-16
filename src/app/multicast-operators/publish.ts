import { interval } from 'rxjs';
import { tap, publish } from 'rxjs/operators';

//publish 操作符 返回 ConnectableObservable，它是 Observable 的变种，它会一直等待，直到 connnect 方法被调用才会开始把值发送给那些订阅它的观察者。
	
// ConnectableObservable，一旦连接，源 Observable 便会向它的观察者发出项。
{
    const interval$ = interval(1000);
    const result$ = interval$.pipe(
        tap(_ => console.log("Do something")),
        publish()
    )
    const sub1 = result$.subscribe(val => console.log(`sub1 ${val}`))
    const sub2 = result$.subscribe(val => console.log(`sub2 ${val}`));
    // 1s 后 connect()调用后开始发射元素
    /*
   "Do Something!"
   "sub1: 0"
   "sub2: 0"
   "Do Something!"
   "sub1: 1"
   "sub2: 1"
   ......
   */
    setTimeout(
        () => { (result$ as any).connect() }
        , 1000)

}