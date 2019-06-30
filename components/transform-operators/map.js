import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
//转换类操作符 map
{
    var width = document.getElementById("width");
    var width$ = fromEvent(width, 'keyup').pipe(map(function (event) { return event.target.value; }));
    width$.subscribe(function (value) { return console.log(value); });
    // 当键盘弹起事件触发时，输出元素的值
}
//# sourceMappingURL=map.js.map