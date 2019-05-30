import {never} from 'rxjs';

// Never = > 不发射任何元素，流里没有任何元素,不结束,就是一个空的，没有状态的
{
    const neverStream$ = never();
    neverStream$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete.')
    )
    // 没有元素，既不输出，也不结束
}