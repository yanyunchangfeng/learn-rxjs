import {fromEvent} from 'rxjs'
import { withLatestFrom ,pluck} from 'rxjs/operators';
//合并类操作符 withLatestFrom 输出是数组，不要求成对，以第一个流为主。
// 对比zip 区别是不要求成对
// 对比combineLatest 以第一流为主
{
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const height$ = fromEvent(height,'keyup').pipe(pluck('target','value'));
    const merged$ = fromEvent(width,'keyup').pipe(
        pluck('target','value'),
        withLatestFrom(height$)
    );
   
    merged$.subscribe(val=>console.log(val)) 
    // 两个流都有值，以第一个流值改变为主 输出为数组格式
}