import {from} from 'rxjs';
import { single } from 'rxjs/operators';
// single操作符的参数是一个断言函数，返回源Observable中与断言函数匹配的那个元素。
{
    const data$ = from(['燕','云','长','风']);
    const result$ = data$.pipe(
        single(value => value === "风")
    )
    result$.subscribe(val => console.log(val))
    // 输出 “风”
}