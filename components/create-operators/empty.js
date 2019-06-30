import { empty } from 'rxjs';
// Empty = > 不发射任何元素，流里没有元素,直接进入complete 状态 有结束
{
    var neverStream$ = empty();
    neverStream$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // I am complete.
}
//# sourceMappingURL=empty.js.map