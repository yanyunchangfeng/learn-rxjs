import { fromEvent } from 'rxjs';
import { merge } from 'rxjs';
import { pluck } from 'rxjs/operators';
//合并类操作符 merge 就是把两个流按各自的顺序叠加成一个流，它每个流的时间点在新流当中都不会变 ,不去更改两个流的任何东西
{
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'));
    var height$ = fromEvent(height, 'keyup').pipe(pluck('target', 'value'));
    var merge$ = merge(width$, height$);
    merge$.subscribe(function (val) { return console.log(val); });
    // 交替的把两个值都输出来
}
//# sourceMappingURL=merge.js.map