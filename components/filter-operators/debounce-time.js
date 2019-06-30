import { fromEvent } from 'rxjs';
import { pluck, debounceTime } from 'rxjs/operators';
//过滤类操作符 debounceTime 指定间隔时间，比如一个输入框，对于规定时间类的输入,完全不理会，也就是不输出
// debounceTime
{
    var width = document.getElementById("width");
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'), debounceTime(1000));
    width$.subscribe(function (value) { return console.log(value); });
    // 小于1000ms内的输入不做输出,只有当停下来的间隔时间超过1000ms，才做值的输出
}
//# sourceMappingURL=debounce-time.js.map