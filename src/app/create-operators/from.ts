import {from} from 'rxjs'
//创建类操作符
//  from 可以把数组、Promise、以及Iterable 转化为Observable

{
    let arr = ['燕','云','长','风']
    let arr$ = from(arr);
    let i = 0;
    arr$.subscribe(
        val=>console.log(val+i++),
        err=>console.log(err),
        ()=> console.log('I am complete.')
    )
    // 燕0 云1 长2 风3 I am complete.
}