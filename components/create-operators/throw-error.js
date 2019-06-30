import { throwError } from 'rxjs';
// throwError = > 不发射任何元素，流里没有元素，直接进入error 状态 
{
    var errStream$ = throwError('出错了');
    errStream$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 出错了
}
//# sourceMappingURL=throw-error.js.map