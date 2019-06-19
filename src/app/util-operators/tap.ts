// 工具类操作符tap,前身是do操作符，因为后续rxjs版本升级，操作符要从 Observable 中独立出来，所以操作符的名称不能和 JavaScript 的关键字冲突。
// tap 起两个作用，一个是调试，一个用作外部条件的一些设置，比如说流进行到下一步之前，需要对外部的一些东西进行改变，比如说写文件等
// tap 作为和外部交互的一个桥梁。这个时候不想subscribe，因为一旦订阅无法再进行连接的操作，起的作用是临时的subscribe，
let log = 'current is ';
import { interval } from 'rxjs'
import { tap , map, take} from 'rxjs/operators';

const interval$ = interval(100).pipe(
    map(val => val * 3),
    tap(val =>{
        console.log(log+ val)
        log = 'current '
    }),
    take(3)
)
interval$.subscribe(
    val=>console.log(val),
    err=>console.log(err),
    ()=>console.log("I'am complete")
)
//current is 0
// 0
// current 3
// 3
// current 6
// 6
// I'am complete