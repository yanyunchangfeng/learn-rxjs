import {throwError} from 'rxjs';
// throwError = > 不发射任何元素，流里没有元素，直接进入error 状态 
{
    const errStream$ = throwError('出错了');
    errStream$.subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log('I am complete.')
    )
    // 出错了
}