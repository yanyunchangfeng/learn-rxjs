import { from } from 'rxjs';
//创建类操作符
//  from 可以把数组、Promise、以及Iterable 转化为Observable
{
    var arr = ['燕', '云', '长', '风'];
    var arr$ = from(arr);
    var i_1 = 0;
    arr$.subscribe(function (val) { return console.log(val + i_1++); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 燕0 云1 长2 风3 I am complete.
}
//# sourceMappingURL=from.js.map