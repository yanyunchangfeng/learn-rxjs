import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
//过滤类操作符 filter
// filter
{
    var interval$ = interval(1000).pipe(filter(function (value) { return value % 2 === 0; })); // 每隔1000毫秒发射一个值
    interval$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete'); });
    // 0 , 2 , 4 ...
}
//# sourceMappingURL=filter.js.map