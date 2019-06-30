import { fromEvent } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
//转换类操作符 mapTo
// mapTo 应用场景： 有的时候，我们不关心值，比如取得某个button的事件，只需要知道发生了就好
{
    var width = document.getElementById("width");
    var total_1 = 0;
    var width$ = fromEvent(width, 'keyup').pipe(mapTo(1));
    width$.subscribe(function (value) { return console.log('keyup事件发生了' + (total_1 += value) + '次'); } // keyup事件发生了1次
    );
    // 当键盘弹起事件触发时，输出元素的值 
}
// 以上demo可以用map替代
{
    var width = document.getElementById("width");
    var total_2 = 0;
    var width$ = fromEvent(width, 'keyup').pipe(map(function (_) { return 1; }));
    width$.subscribe(function (value) { return console.log('keyup事件发生了' + (total_2 += value) + '次'); } // keyup事件发生了1次
    );
    // 当键盘弹起事件触发时，输出元素的值    
}
//# sourceMappingURL=map-to.js.map