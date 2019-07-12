import {from,of} from 'rxjs';
import { switchMap, sequenceEqual } from 'rxjs/operators';
// sequceEqual 判断源Observable 队列中每个值和已知的Observable队列中的每个值是否一一对应
//相等返回true，不相等返回false
{
    const expectedSequence = from([0,9,1,8]);
    const  result$ = of([1,2,3,4],[0,9,1,8],[1,1,0,1]).pipe(
        switchMap(arr => from(arr).pipe(
            sequenceEqual(expectedSequence)
        ))
    )
    result$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("I'm complete.")
    )
    // false ,true, false , I'm complete.
}