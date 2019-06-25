import {fromEvent, interval} from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
// 将每个源值投射成 Observable，只有当前一个投射的 Observable 已经完成， 这个 Observable 才会被合并到输出 Observable 中。
// 返回的 Observable 基于应用一个函数来发送项，该函数提供给源 Observable 发出的每个项， 并返回一个(所谓的“内部”) Observable 。
// 当它将源值投射成 Observable 时，输出 Observable 开始发出由投射的 Observable 发出的项。然而，如果前一个投射的 Observable 还未完成的话， 
// 那么 exhaustMap 会忽略每个新投射的 Observable 。一旦完成，它将接受并打平下一个 内部 Observable ，然后重复此过程。
{
    const clicks$ = fromEvent(document,'click');
    const result$ = clicks$.pipe(
        exhaustMap(ev =>{
            return interval(1000).pipe(take(5));
        })
    )
    result$.subscribe(val => console.log(val))
}