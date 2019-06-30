import { of } from 'rxjs';
//创建类操作符
//  of 接受一系列的数据，并且把它们emit(发射)出去
{
    var num$ = of(9, 5, 2, 7);
    num$.subscribe(function (val) { return console.log(val + 1); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 10 6 3 8 I am complete.
}
//# sourceMappingURL=of.js.map