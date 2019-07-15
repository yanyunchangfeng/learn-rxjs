import { timer }from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';
// 返回一个新的 Observable，该 Observable 多播(共享)源 Observable。 至少要有一个订阅者，该 Observable 才会被订阅并发出数据。 当所有的订阅者都取消订阅了，它会取消对源 Observable 的订阅。 因为 Observable 是多路传播的它使得流是 hot。 它是 ｀.publish().refCount()｀ 的别名
{
    const timer$ = timer(1000);
    const result$ = timer$.pipe(
        tap(()=>console.log('Side Effect')),
        mapTo('https://yanyunchangfeng.com')
    )
    const sub1= result$.subscribe(val=>console.log(val))
    const sub2= result$.subscribe(val=>console.log(val))
    // 不是热的Obervable （即点播）side Effect 会执行两遍
    // "Side Effect"
    // "https://yanyunchangfeng.com"
    // "Side Effect"
    // "https://yanyunchangfeng.com"
}
{
    const timer$ = timer(1000);
    const result$ = timer$.pipe(
        tap(()=>console.log('Side Effect')),
        mapTo('https://yanyunchangfeng.com')
    )
    const sharedResult$= result$.pipe(share())
    //热的Observable （即直播）side Effect会执行一遍
    const sub1 = sharedResult$.subscribe(val=>console.log(val))
    const sub2 = sharedResult$.subscribe(val=>console.log(val))
    // "Side Effect"
    // "https://yanyunchangfeng.com"
    // "https://yanyunchangfeng.com"
}
