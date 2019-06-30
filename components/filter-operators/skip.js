import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';
//过滤类操作符 skip 省略掉前面多少个元素
// skip
{
    var interval$ = interval(1000).pipe(skip(3)); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 3,4,5....
}
//# sourceMappingURL=skip.js.map