import { interval, Subject } from 'rxjs';
import { share, take } from 'rxjs/operators';
// Observable 的冷 点播
{
    var count$_1 = interval(1000);
    var sub1 = count$_1.subscribe(function (val) { return console.log(val); });
    setTimeout(function () {
        var sub2 = count$_1.subscribe(function (val) { return console.log(val); });
    }, 2000);
    // 两个流不同步，无论何时订阅，都是从头开始播
}
// Observable 的热 直播
{
    var count$_2 = interval(1000).pipe(share());
    var sub1 = count$_2.subscribe(function (val) { return console.log(val); });
    setTimeout(function () {
        var sub2 = count$_2.subscribe(function (val) { return console.log(val); });
    }, 2000);
    // 直播，无论何时订阅，都是接受最新的值
}
{
    var counter$_1 = interval(1000).pipe(take(5));
    var observer1 = {
        next: function (val) { return console.log('1:' + val); },
        error: function (err) { return console.log('ERROR >> 1:' + err); },
        complete: function () { return console.log('1 is complete'); },
    };
    var observer2_1 = {
        next: function (val) { return console.log('2:' + val); },
        error: function (err) { return console.log('ERROR >> 2:' + err); },
        complete: function () { return console.log('2 is complete'); },
    };
    counter$_1.subscribe(observer1); // 我们以前订阅的那种方式 val => {}, err=>{},()=>{}相当于语法糖，它帮我们创建了一个observer/
    setTimeout(function () {
        counter$_1.subscribe(observer2_1);
    }, 2000);
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
    var counter$ = interval(1000).pipe(take(5));
    var subject_1 = new Subject();
    var observer1 = {
        next: function (val) { return console.log('1:' + val); },
        error: function (err) { return console.log('ERROR >> 1:' + err); },
        complete: function () { return console.log('1 is complete'); },
    };
    var observer2_2 = {
        next: function (val) { return console.log('2:' + val); },
        error: function (err) { return console.log('ERROR >> 2:' + err); },
        complete: function () { return console.log('2 is complete'); },
    };
    subject_1.subscribe(observer1); // 体现Observable作用，因为可以subscribe observer
    setTimeout(function () {
        subject_1.subscribe(observer2_2); // 体现Observable作用，因为可以subscribe observer
    }, 2000);
    counter$.subscribe(subject_1); // 体现observer作用，因为可以被Observable subscribe
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
    var counter$ = interval(1000).pipe(take(5));
    var subject_2 = new Subject();
    var observer1 = {
        next: function (val) { return console.log('1:' + val); },
        error: function (err) { return console.log('ERROR >> 1:' + err); },
        complete: function () { return console.log('1 is complete'); },
    };
    var observer2_3 = {
        next: function (val) { return console.log('2:' + val); },
        error: function (err) { return console.log('ERROR >> 2:' + err); },
        complete: function () { return console.log('2 is complete'); },
    };
    subject_2.subscribe(observer1);
    subject_2.next(10);
    subject_2.next(11);
    setTimeout(function () {
        subject_2.subscribe(observer2_3);
    }, 2000);
    counter$.subscribe(subject_2);
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
//# sourceMappingURL=subject.js.map