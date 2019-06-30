import { fromEvent } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';
//过滤类操作符 distinctUntilChanged 与上一个输入的值不相同时，才做输出
// distinct
{
    var width = document.getElementById("width");
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'), distinctUntilChanged());
    width$.subscribe(function (value) { return console.log(value); });
    // 仅与上一个输出的值做比较，改变了即输出
}
//# sourceMappingURL=distinct-until-changed.js.map