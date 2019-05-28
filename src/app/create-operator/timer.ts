import { timer } from 'rxjs';


{
    const timer$ = timer(1000) // 1000毫秒后发射一个值，然后结束
    timer$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete')
    )
    // 0,I am complete
}
{
    const timer$ = timer(3000, 1000) // 第一个参数为delay延迟时间，第二个参数为间隔时间，然后再接着发送值
    timer$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete')
    )
    // 0,1,2....
    //相比 interval 区别 ，interval 只能指定间隔时间，不能指定一开始的延迟时间
}