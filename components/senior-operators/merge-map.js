import { fromEvent, interval } from 'rxjs';
import { pluck, map, mergeMap } from 'rxjs/operators';
//高阶操作符  作用：拍扁数据流，比如说一个流里又开始了一条新流。
// mergeMap 保存外层元素所有子流的订阅
{
    var width = document.getElementById('width');
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'), map(function (_) { return interval(100); }));
    width$.subscribe(function (val) {
        // val.subscribe(v => console.log(v)) // 流里有子流
    });
}
{
    var width = document.getElementById('width');
    var width$ = fromEvent(width, 'keyup').pipe(pluck('target', 'value'), mergeMap(function (_) { return interval(100); }) //拍扁数据流，降维
    );
    width$.subscribe(function (val) { return console.log(val); });
    //输出所有外层元素的子流
}
//# sourceMappingURL=merge-map.js.map