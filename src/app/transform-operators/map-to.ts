import {fromEvent} from 'rxjs'
import {mapTo,map} from 'rxjs/operators'

//转换类操作符 mapTo
// mapTo 应用场景： 有的时候，我们不关心值，比如取得某个button的事件，只需要知道发生了就好
{
    const width = document.getElementById("width");
    let total = 0;
    const width$ = fromEvent(width,'keyup').pipe(
        mapTo(1)
    );
    width$.subscribe(
        value => console.log('keyup事件发生了'+(total+=value)+'次') // keyup事件发生了1次
    )
    // 当键盘弹起事件触发时，输出元素的值 
}
// 以上demo可以用map替代
{

        const width = document.getElementById("width");
        let total = 0;
        const width$ = fromEvent(width,'keyup').pipe(
            map(_ => 1)
        );
        width$.subscribe(
            value => console.log('keyup事件发生了'+(total+=value)+'次') // keyup事件发生了1次
        )
        // 当键盘弹起事件触发时，输出元素的值    
}