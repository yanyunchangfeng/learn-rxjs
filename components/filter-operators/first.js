import { interval } from 'rxjs';
import { first } from 'rxjs/operators';
//过滤类操作符 first 是 take 的一种特殊的表达形式
// filter
{
    var interval$ = interval(1000).pipe(first()); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 0 , am complete.
}
//# sourceMappingURL=first.js.map