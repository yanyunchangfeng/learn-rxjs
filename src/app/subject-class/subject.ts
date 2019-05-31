import {interval, Subject} from 'rxjs';
import {share, take} from 'rxjs/operators';

// Observable 的冷 点播
{
    const count$ = interval(1000);
    
    const sub1 =  count$.subscribe(
        val => console.log(val) 
    )
    setTimeout(()=>{
        const sub2 =  count$.subscribe(
            val => console.log(val)
        )
    },2000)
    // 两个流不同步，无论何时订阅，都是从头开始播
}
// Observable 的热 直播
{
    const count$ = interval(1000).pipe(
       share()
    );
    
    const sub1 =  count$.subscribe(
        val => console.log(val)
    )
    setTimeout(()=>{
        const sub2 =  count$.subscribe(
            val => console.log(val)
        )
    },2000)
    // 直播，无论何时订阅，都是接受最新的值
}

{
   const counter$ = interval(1000).pipe(
       take(5)
   );
   const observer1 = {
       next:(val:any) => console.log('1:'+ val),
       error:(err:any) => console.log('ERROR >> 1:'+ err),
       complete:() => console.log('1 is complete'),
   }
   const observer2 = {
       next:(val:any) => console.log('2:'+ val),
       error:(err:any) => console.log('ERROR >> 2:'+ err),
       complete:() => console.log('2 is complete'),
   }
   counter$.subscribe(observer1) // 我们以前订阅的那种方式 val => {}, err=>{},()=>{}相当于语法糖，它帮我们创建了一个observer/
   setTimeout(()=>{
       counter$.subscribe(observer2)
   },2000)
//  1:0
//  1:1
//  1:2
//  2:0
//  1:3
//  2:1
//  1:4
//  1 is complete
//  2:2
//  2:3
//  2:4
//  2 is complete
    
   // 现在有问题，我们需要在两处执行subscribe 
   // 很多情况是这样，定义好这些序列应该在什么情况下触发，我只需要执行一句，这两个序列都会执行
}

// Subject 即是Observable 又是observer
{
    const counter$ = interval(1000).pipe(
        take(5)
    );
    const subject = new Subject();
    const observer1 = {
        next:(val:any) => console.log('1:'+ val),
        error:(err:any) => console.log('ERROR >> 1:'+ err),
        complete:() => console.log('1 is complete'),
    }
    const observer2 = {
        next:(val:any) => console.log('2:'+ val),
        error:(err:any) => console.log('ERROR >> 2:'+ err),
        complete:() => console.log('2 is complete'),
    }
    subject.subscribe(observer1) // 体现Observable作用，因为可以subscribe observer
    setTimeout(()=>{
        subject.subscribe(observer2) // 体现Observable作用，因为可以subscribe observer
    },2000)
    counter$.subscribe(subject) // 体现observer作用，因为可以被Observable subscribe
//  1:0
//  1:1
//  2:1
//  1:2
//  2:2
//  1:3
//  2:3
//  1:4
//  2:4
//  1 is complete
//  2 is complete
 }

  // Subject 是热的Observable
 {
    const counter$ = interval(1000).pipe(
        take(5)
    );
    const subject = new Subject();
    const observer1 = {
        next:(val:any) => console.log('1:'+ val),
        error:(err:any) => console.log('ERROR >> 1:'+ err),
        complete:() => console.log('1 is complete'),
    }
    const observer2 = {
        next:(val:any) => console.log('2:'+ val),
        error:(err:any) => console.log('ERROR >> 2:'+ err),
        complete:() => console.log('2 is complete'),
    }
    subject.subscribe(observer1) 
    subject.next(10)
    subject.next(11)
    setTimeout(()=>{
        subject.subscribe(observer2) 
    },2000)
    counter$.subscribe(subject)  
    // 现在 observer 1 会输出10，11 而observer2不会输出10，11 因为subject是直播
// 1:10
// 1:11
// 1:0
// 1:1
// 2:1
// 1:2
// 2:2
// 1:3
// 2:3
// 1:4
// 2:4
// 1 is complete
// 2 is complete
 }



