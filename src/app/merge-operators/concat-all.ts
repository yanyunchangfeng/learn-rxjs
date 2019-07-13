import { fromEvent, interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';
// 通过顺序地连接内部 Observable，将高阶 Observable 转化为一阶 Observable 
// 通过一个接一个的连接内部 Observable ，将高阶 Observable 打平。
// 串行连接源(高阶 Observable)所发出的每个 Observable，只有当一个内部 Observable 完成的时候才订阅下 一个内部 Observable，并将它们的所有值合并到返回的 Observable 中。

{
    // 每次点击都会触发从0到3的定时器(时间间隔为1秒)，定时器之间是串行的
    const clicks$ = fromEvent(document, 'click');
    const result$ = clicks$.pipe(
        map(ev => interval(1000).pipe(
            take(4)
        )),
        concatAll()
    )
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    // 结果如下:
    // (结果是串行的)
    // 对于"document"对象上的点击事件，都会以1秒的间隔发出从0到3的值
    // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
}