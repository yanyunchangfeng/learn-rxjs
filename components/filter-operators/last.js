import { from } from 'rxjs';
import { last } from 'rxjs/operators';
//过滤类操作符 last 是 take 的一种特殊的表达形式
// last
{
    var interval$ = from([1, 2, 3, 4, 5]).pipe(last()); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 5 , am complete.
}
//# sourceMappingURL=last.js.map