import { fromEvent } from 'rxjs';
import { zip } from 'rxjs';
import { pluck } from 'rxjs/operators';
//合并类操作符 zip 对齐 想象成拉链的对齐 , 两个流都有值才会输出，必须是一一对应，最慢的流决定了最终的速度
{
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'));
    var height$ = fromEvent(height, 'keyup').pipe(pluck('target', 'value'));
    var zip$ = zip(width$, height$, function (w, h) { return w * h; });
    zip$.subscribe(function (val) { return console.log(val); });
    // 两个流都有值才会合并，任何一个流的值改变，都会输出新值
}
//# sourceMappingURL=zip.js.map