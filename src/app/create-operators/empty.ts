import {empty} from 'rxjs';
// Empty = > 不发射任何元素，流里没有元素,直接进入complete 状态 有结束
{
    const neverStream$ = empty();
    neverStream$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete.')
    )
    // I am complete.
}