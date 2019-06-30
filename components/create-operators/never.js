import { never } from 'rxjs';
// Never = > 不发射任何元素，流里没有任何元素,不结束,就是一个空的，没有状态的
{
    var neverStream$ = never();
    neverStream$.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); }, function () { return console.log('I am complete.'); });
    // 没有元素，既不输出，也不结束
}
//# sourceMappingURL=never.js.map