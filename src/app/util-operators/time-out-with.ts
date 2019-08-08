import { of} from 'rxjs';
import { timeoutWith, delay, concatMap } from 'rxjs/operators';
// timeoutWith参数1为超时时间，参数2为超时后的输出流
{
    const fakeRequest = (delayTime: number) => of('!response!').pipe(delay(delayTime));
    const requesstTimeoutlogger = of('logging request timeout');
    const timeoutThreshold = 1000;
    const result$ = of(timeoutThreshold + 1, timeoutThreshold - 1, timeoutThreshold + 3).pipe(
        concatMap(e => fakeRequest(e).pipe(
            timeoutWith(timeoutThreshold, requesstTimeoutlogger)
        ))
    )
    result$.subscribe(val => console.log(val))
    /*
     OUTPUT:
    logging request timeout
    !response!
    logging request timeout
    */
}