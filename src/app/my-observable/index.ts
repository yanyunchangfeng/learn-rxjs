console.log("Hello World");

const callback = () => {
  console.log("Hello World");
};

const reminder = () => {
  console.log("Time to drink water!");
};
const reminderCb = (cb: any) => {
  cb();
};
const reminderCbAndTimerCb = (cb: any) => {
  cb();
  setTimeout(() => {
    cb();
  }, 1000);
};
reminder();
reminderCb(() => {
  console.log("Time to write code !");
});
reminderCbAndTimerCb(() => {
  console.log("Time to wtire code again and again");
});

class Reminder {
  remind(cb: any) {
    cb.next(1);
    cb.complete();
  }
}

const reminder1 = new Reminder();

reminder1.remind({
  next: (val: any) => {
    console.log(val, "next");
  },
  complete: (val: any) => {
    console.log(val);
  },
});

class Reminder2 {
  behavior: any;
  constructor(behavior: any) {
    this.behavior = behavior;
  }
  remind(cb: any) {
    this.behavior(cb);
  }
}

const reminder2 = new Reminder2((cb: any) => {
  cb.next(2);
  cb.complete();
});
reminder2.remind({
  next(val: any) {
    console.log(val, "next2");
  },
  complete(val: any) {
    console.log(val, "complete");
  },
});
//  Reminder => Observable
//  remind => subscribe
//  cb => observer
//  reminder => obs$
class Observable {
  behavior: any; // 或者_subscribe
  constructor(behavior: any) {
    this.behavior = behavior;
    // this._subscribe = subscribe 构造函数也可用subscribe
  }
  subscribe(observer: any) {
    this.behavior(observer);
    // this._subscribe(observer)
  }
}

const obs$ = new Observable((observer: any) => {
  observer.next(1);
  observer.complete();
});

const observer = {
  next: (val: any) => {
    console.log(val, "observer next");
  },
  error: (err: any) => {
    console.log(err, "err");
  },
  complete: () => {
    console.log("complete");
  },
};
obs$.subscribe(observer);
// 官方 Observable 的 subscribe 可以传入一个函数进去，这样的话写起来会清爽很多，我们也来实现一下

class OfficialObservable {
  _subscribe: any; // 或者_subscribe
  constructor(subscribe: any) {
    this._subscribe = subscribe;
    // this._subscribe = subscribe 构造函数也可用subscribe
  }
  subscribe(observer: any): any {
    const defaultObserver = {
      next: () => {
        console.log("next");
      },
      err: () => {
        console.log("err");
      },
      complete: () => {
        console.log("complete");
      },
    };
    if (typeof observer === "function") {
      return this.subscribe({ ...defaultObserver, next: observer });
    }
    return this._subscribe({ ...defaultObserver, ...observer });
  }
}
