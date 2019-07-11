import {AsyncSubject} from 'rxjs';
// AsyncSubject 是另一个 Subject 变体，只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。
// AsyncSubject 和 last() 操作符类似，因为它也是等待 complete 通知，以发送一个单个值
{
    const sub = new AsyncSubject();
    sub.subscribe(val=>console.log(val));
    sub.next(111)
    sub.subscribe(val=>console.log(val))
    sub.next(222);
    sub.complete();
    // 222, 222 logged by both subscribers
}