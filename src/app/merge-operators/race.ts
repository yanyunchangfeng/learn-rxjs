import {race, interval} from 'rxjs';
import { mapTo } from 'rxjs/operators';
//合并类操作符race，只取最快的那个流。
{
    const result$ = race(
        interval(1500),
        interval(1000).pipe(mapTo('1s won')),
        interval(2000),
        interval(2500)
    );
    result$.subscribe(val=>console.log(val))
    //输出: "1s won!"..."1s won!"...
}