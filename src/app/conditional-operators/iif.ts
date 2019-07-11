import {interval, iif,of} from 'rxjs';
import { mergeMap } from 'rxjs/operators';

{
    const odd$ = of('odd');
    const even$ = of('even');
    const interval$ = interval(1000);
    const result$ = interval$.pipe(
        mergeMap( val=> iif(()=> val%2===0,even$,odd$))
    )
    result$.subscribe(
        val=>console.log(val)
    )
    // even,odd,even,odd...
}