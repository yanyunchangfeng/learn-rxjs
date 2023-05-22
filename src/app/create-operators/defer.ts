import { defer, fromEvent, interval, map } from "rxjs";
// 创建一个 Observable，当被订阅的时候，调用 Observable 工厂为每个观察者创建新的 Observable。
// 惰性创建 Observable, 也就是说, 当且仅当它被订阅的时候才创建。
{
  // 随机订阅点击或者 interval Observable
  const clickOrInterval$ = defer(() => {
    if (Math.random() > 0.5) {
      return fromEvent(document, "click")
        .pipe
        // map((e) => (e as MouseEvent).clientX)
        ();
    } else {
      return interval(1000);
    }
  });
  // // 结果如下:
  // 如果Math.random()返回的值大于0.5，它会监听"document"上的点击事件; 当document
  // 被点击，它会将点击事件对象打印到控制台。 如果结果小于0.5它会每秒发出一个从0开始自增数。
  clickOrInterval$.subscribe((val) => console.log(val));
}
