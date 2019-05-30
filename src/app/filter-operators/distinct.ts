import {fromEvent} from 'rxjs'
import { pluck , distinct} from 'rxjs/operators';

//过滤类操作符 distinct 让流里无重复数据，类似es6 set功能 
//对无尽序列使用distinct要小心，因为对整个序列做监控，内存消耗大

// distinct
{
    const width = document.getElementById("width");
    const width$ = fromEvent(width,'keyup').pipe(
        pluck('target','value'),
        distinct()
    );
    width$.subscribe(
        value => console.log(value)
    )
    // 输入重复的数据，不做第二次输出
}