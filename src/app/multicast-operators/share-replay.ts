import {Subject, ReplaySubject} from 'rxjs';
import { share,pluck ,tap, shareReplay} from 'rxjs/operators';
//shareRepaly 热的重播，功能和ReplaySubject类似，重播
{
    const routeEnd = new Subject<{data:any,url:string}>();
    const lastUrl = routeEnd.pipe(
        pluck('url'),
        share()
    )
    const initialSubscriber = lastUrl.subscribe(val=>console.log(val));
    // my-path
    routeEnd.next({data: {}, url: 'my-path'});
    // nothing logged
    const lateSubscriber = lastUrl.subscribe(val=>console.log(val));
}

{
        const routeEnd = new Subject<{data:any,url:string}>();
        const lastUrl = routeEnd.pipe(
            tap(()=>console.log('executed')),
            pluck('url'),
            shareReplay(1),

        )
        const initialSubscriber = lastUrl.subscribe(val=>console.log(val));
        // excuted ,my-path
        routeEnd.next({data: {}, url: 'my-path'});
        // my-path
        const lateSubscriber = lastUrl.subscribe(val=>console.log(val));
    
}

{
    const routeEnd = new Subject<{data:any,url:string}>();
    const shareWithReplay = new ReplaySubject();
    const lastUrl = routeEnd.pipe(
        tap(()=>console.log('executed')),
        pluck('url'),
        shareReplay(1),
    ).subscribe(
        val => shareWithReplay.next(val)
    )
    routeEnd.next({data: {}, url: 'my-path'});
    // executd, my-path
    const sub = shareWithReplay.subscribe(val=>console.log(val));

}