  import {take} from 'rxjs/operators';
  import {BehaviorSubject,interval} from 'rxjs';
  
  // BehaviorSubject 是replaySubject的一种特殊形式  保留最新的一个值
  {
    const counter$ = interval(1000).pipe(
        take(5)
    );
    const subject = new BehaviorSubject(1);
    console.dir(subject)
    subject.next(10)
    subject.next(11)
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
    setTimeout(()=>{
        subject.subscribe(observer2) 
    },2000)
    counter$.subscribe(subject)  
//  1:11
//  1:0
//  2:0
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