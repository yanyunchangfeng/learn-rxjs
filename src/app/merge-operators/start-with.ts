import {from} from 'rxjs'
import {startWith } from 'rxjs/operators';
//合并类操作符 startWith 用于赋初始值，避免流里一开始没有值。
{
    

    const startWith$ = from([1,2,3,4,5]).pipe(
        startWith(0)
    )
    startWith$.subscribe(val=>console.log(val)) 
    // 0,1,2,3,4,5
}