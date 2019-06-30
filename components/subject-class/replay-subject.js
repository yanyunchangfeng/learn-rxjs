import { take } from 'rxjs/operators';
import { ReplaySubject, interval } from 'rxjs';
// ReplaySubject 保留最新的n个值
{
    var counter$ = interval(1000).pipe(take(5));
    var subject_1 = new ReplaySubject(2);
    subject_1.next(10);
    subject_1.next(11);
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
    subject_1.subscribe(observer1);
    setTimeout(function () {
        subject_1.subscribe(observer2_1);
    }, 2000);
    counter$.subscribe(subject_1);
    //    1:10
    //    1:11
    //    1:0
    //    2:11
    //    2:0
    //    1:1
    //    2:1
    //    1:2
    //    2:2
    //    1:3
    //    2:3
    //    1:4
    //    2:4
    //    1 is complete
    //    2 is complete
}
//# sourceMappingURL=replay-subject.js.map