import { fromEvent, from } from 'rxjs';
import { concat } from 'rxjs';
import { pluck } from 'rxjs/operators';
//合并类操作符 concat  只有当第一个流有尽头，第二个流才会输出
{
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'));
    var height$ = fromEvent(height, 'keyup').pipe(pluck('target', 'value'));
    var concat$ = concat(width$, height$);
    concat$.subscribe(function (val) { return console.log(val); });
    // 现在只有第一个流会输出，因为第一个流是无尽头的
}
{
    var height = document.getElementById('height');
    var first$ = from([1, 2, 3, 4]);
    var height$ = fromEvent(height, 'keyup').pipe(pluck('target', 'value'));
    var concat$ = concat(first$, height$);
    concat$.subscribe(function (val) { return console.log(val); });
    // 现在会先输出第一个流的值 1, 2, 3, 4然后在输入的情况下，会接着输出第二个流的值
}
//# sourceMappingURL=concat.js.map