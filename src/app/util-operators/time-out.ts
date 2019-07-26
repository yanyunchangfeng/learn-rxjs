import {of} from'rxjs';
import { delay, concatMap, catchError ,timeout} from 'rxjs/operators';
// timeout 指定超时时间，如果在指定时间内没有发射任何值将会发生错误
{
    const makeRequest = (timeToDelay:number)=> of('Request Complete!').pipe(delay(timeToDelay));
    const result$ = of(4000,3000,2000).pipe(
        concatMap((duration:number) =>
            makeRequest(duration).pipe(
                   timeout(2500),
                   catchError((error:Error) => of (`Request timed out after:${duration}`))
                )
        )
    )
    result$.subscribe(val => console.log(val));
  /*
   *  "Request timed out after: 4000"
   *  "Request timed out after: 3000"
   *  "Request Complete!"
   */
}
