import { interval, fromEvent } from 'rxjs';
import { scan, take } from 'rxjs/operators';
//过滤类操作符 scan 函数可以接受两个参数。第一个参数为函数，第二个参数为初始值，默认为零
//这个函数参数有3个参数，第一个参数为accumulator累加器,第二个为当前元素值，第三个为index,返回的值将作为下一个累加器的结果
// scan  应用场景：有的时候需要记住之前的结果，这个时候用scan
{
    var interval$ = interval(1000).pipe(scan(function (x, y) { return x + y; }), take(3)); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 0 ,1 ,3, I am complete.
}
// 0 ----1 ---2
// 0 ----1 ---3
{
    var btn = document.getElementById('btn');
    var cal_1 = document.getElementById('cal');
    var btn$ = fromEvent(btn, 'click').pipe(scan(function (value) { return value + 1; }, 0));
    btn$.subscribe(function (value) {
        cal_1.innerHTML = value + '';
    });
}
//# sourceMappingURL=scan.js.map