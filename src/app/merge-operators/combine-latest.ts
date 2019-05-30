import {fromEvent} from 'rxjs'
import {combineLatest} from 'rxjs';
import { pluck } from 'rxjs/operators';
//合并类操作符 combineLatest  两个流都有值才会合并，任何一个流的值改变，都会输出新值
{
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const width$ = fromEvent(width,'keyup').pipe(pluck('target','value'));
    const height$ = fromEvent(height,'keyup').pipe(pluck('target','value'));
    const combineLatest$ = combineLatest(width$,height$,(w:any,h:any) => w * h )
    combineLatest$.subscribe(val=>console.log(val)) 
   
}