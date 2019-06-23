import {fromEvent, interval} from 'rxjs'
import { pluck, map, mergeMap } from 'rxjs/operators';
//高阶操作符  作用：拍扁数据流，比如说一个流里又开始了一条新流。
// mergeMap 保存外层元素所有子流的订阅
{
    const width = document.getElementById('width');
    const width$ = fromEvent(width,'keyup').pipe(
        pluck('target','value'),
        map( _ => interval(100))
    );
    width$.subscribe(val=>{
        // val.subscribe(v => console.log(v)) // 流里有子流
    })
}

{
    const width = document.getElementById('width');
    const width$ = fromEvent(width,'keyup').pipe(
        pluck('target','value'),
        mergeMap( _ => interval(100)) //拍扁数据流，降维
    );
    width$.subscribe(
        val=>console.log(val)
    )
  //输出所有外层元素的子流
}
