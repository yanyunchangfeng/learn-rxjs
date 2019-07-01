import {of} from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
//过滤类操作符 distinctUntilKeyChanged 与上一个源的值key不相同时，才做输出
{
    const data$ = of(
        {age:25,name:'yanyunchangfeng'},
        {age:26,name:'yycf'},
        {age:25,name:'yanyunchangfeng'},
        {age:25,name:'yycf'},
        {age:26,name:'yycf'},
        )
    const result$ = data$.pipe(
        distinctUntilKeyChanged('name'),
        
    )
    // result$.subscribe(val => console.log(val))
    //除了最后一个对象，全部依次输入
}

{
    // 比较名字前四个字母的示例
    // 第二个参数为可选比较函数，用来检验当前项与源中的前一项是否相同。
    const data$ = of(
        {age:25,name:'yanyunchangfeng'},
        {age:26,name:'yycf'},
        {age:25,name:'yanyunchangfeng'},
        {age:25,name:'yycf1'},
        {age:26,name:'yycf2'},
        )
    const result$ = data$.pipe(
        distinctUntilKeyChanged('name',(x:string,y:string)=> x.substr(0,4)===y.substr(0,4)),
        
    )
    result$.subscribe(val => console.log(val))
    //除了最后一个对象，全部依次输入
}