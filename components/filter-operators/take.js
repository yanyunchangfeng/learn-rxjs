import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
//过滤类操作符 take
// filter
{
    var interval$ = interval(1000).pipe(take(5)); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 0,1,2,3,4,I am complete.
}
//# sourceMappingURL=take.js.map