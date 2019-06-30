import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';
//过滤类操作符 reduce 函数可以接受两个参数。第一个参数为函数，第二个参数为初始值，默认为零
//这个函数参数有3个参数，第一个参数为accumulator累加器,第二个为当前元素值，第三个为index,返回的值将作为下一个累加器的结果
// reduce  统计，把累加的结果一次发送，scan 是把每次累加的结果
{
    var interval$ = interval(1000).pipe(take(3), reduce(function (x, y) { return x + y; }, 3)); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    //6, I am complete.
}
//
{
    var interval$ = interval(1000).pipe(take(3), reduce(function (x, y) { return x.concat([y]); }, [])); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    //[0,1,2], I am complete.
}
//# sourceMappingURL=reduce.js.map