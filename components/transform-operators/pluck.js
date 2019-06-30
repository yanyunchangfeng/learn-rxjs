import { fromEvent } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
//转换类操作符 pluck 从得到的对象中取出相应的的属性
{
    var width = document.getElementById("width");
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'));
    width$.subscribe(function (value) { return console.log(value); });
    // 当键盘弹起事件触发时，输出元素的值
}
// 以上demo可以用map替代
{
    var width = document.getElementById("width");
    var width$ = fromEvent(width, 'keyup').pipe(map(function (event) { return event.target.value; }));
    width$.subscribe(function (value) { return console.log(value); });
    // 当键盘弹起事件触发时，输出元素的值
}
//# sourceMappingURL=pluck.js.map