import { interval } from 'rxjs';
import { groupBy, mergeMap, reduce, take } from 'rxjs/operators';
// 根据指定条件将源 Observable 发出的值进行分组，并将这些分组作为 GroupedObservables 发出，每一个分组都是一个 GroupedObservable 。
// 第一个参数 keySelector 	
// 提取每项的键的函数。
// 第二个参数 elementSelector 	
// 提取每项返回元素的函数。
// 第三个参数 durationSelector 	
// 返回一个 Observable 来确定每个组应该存在多长时间的函数。
{
    var interval$ = interval(1000);
    var result$ = interval$.pipe(take(10), groupBy(function (i) { return i % 2; }), mergeMap(function (group$) { return group$.pipe(reduce(function (acc, val) { return acc.concat([val]); }, ["" + group$.key])); }));
    result$.subscribe(function (val) { return console.log(val); });
    // ["0",0, 2, 4, 6, 8]
    // ["1",1,3, 5, 7, 9]
}
//# sourceMappingURL=group-by.js.map