import { fromEvent } from 'rxjs';
//创建类操作符
//  fromEvent 可以把事件转化为Observable
{
    var width = document.getElementById("width");
    var width$ = fromEvent(width, 'keyup').pipe();
    width$.subscribe(function (event) { return console.log(event.target.value); });
    // 当键盘弹起事件触发时，输出元素的值
}
//# sourceMappingURL=from-event.js.map