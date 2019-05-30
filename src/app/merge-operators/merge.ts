import {fromEvent} from 'rxjs'
import {merge} from 'rxjs';
import { pluck } from 'rxjs/operators';
//合并类操作符 merge 就是把两个流按各自的顺序叠加成一个流，它每个流的时间点在新流当中都不会变 ,不去更改两个流的任何东西
{
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const width$ = fromEvent(width,'keyup').pipe(pluck('target','value'));
    const height$ = fromEvent(height,'keyup').pipe(pluck('target','value'));

    const merge$ = merge(width$,height$)
    merge$.subscribe(val=>console.log(val)) 
    // 交替的把两个值都输出来
}