import {Observable} from'rxjs';

{
    const evenNumber$ = Observable.create((observer:any)=>{
        let value = 0;
        const interval = setInterval(
            () => {
                if(value%2 === 0){
                    observer.next(value)
                }
                value++;
            },1000);
        return () => clearInterval(interval) 
    })
    // 0,2,4,6,8
    const subscription = evenNumber$.subscribe((val:any)=>console.log(val))
    setTimeout(() => {
        subscription.unsubscribe();
      }, 10000);
}