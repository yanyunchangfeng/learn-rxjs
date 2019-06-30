import { interval, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
// 自定义操作符 takeEveryNth
{
    var takeEveryNth = function (n) { return function (source) {
        return new Observable(function (observer) {
            var count = 0;
            return source.subscribe({
                next: function (x) {
                    if (count++ % n === 0)
                        observer.next(x);
                },
                error: function (err) {
                    observer.error(err);
                },
                complete: function () {
                    observer.complete();
                }
            });
        });
    }; };
    var interval$ = interval(1000).pipe(takeEveryNth(2));
    interval$.subscribe(function (val) { return console.log(val); });
}
// 进一步简化，使用现有操作符改写
{
    var takeEveryNthSimple = function (n) { return function (source) {
        return source.pipe(filter(function (value, index) { return index % n === 0; }));
    }; };
    var interval$ = interval(1000).pipe(takeEveryNthSimple(2));
    interval$.subscribe(function (val) { return console.log(val); });
}
// 因为pipeable操作符返回的是函数，还可以进一步简化
{
    var takeEveryNthSimplest = function (n) { return filter(function (value, index) { return index % n === 0; }); };
    var interval$ = interval(1000).pipe(takeEveryNthSimplest(2));
    interval$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=takeEveryNth.js.map