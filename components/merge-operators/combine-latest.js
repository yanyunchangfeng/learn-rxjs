import { fromEvent } from 'rxjs';
import { combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';
//合并类操作符 combineLatest  两个流都有值才会合并，任何一个流的值改变，都会输出新值
{
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'));
    var height$ = fromEvent(height, 'keyup').pipe(pluck('target', 'value'));
    var combineLatest$ = combineLatest(width$, height$, function (w, h) { return w * h; });
    combineLatest$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=combine-latest.js.map