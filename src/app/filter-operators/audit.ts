import { fromEvent, interval } from "rxjs";
import { audit } from "rxjs/operators";
// audit 和 throttle 很像, 但是发出沉默时间窗口的最后一个值, 而不是第一个。
// 就像是auditTime, 但是沉默持续时间段由第二个 Observable 决定。
{
  // 以每秒最多点击一次的频率发出点击事件
  const clicks$ = fromEvent(document, "click");
  const result$ = clicks$.pipe(
    audit((ev) => interval(1000)) //时间可以是非固定的，随着条件做动态化
  );
  result$.subscribe((value) => console.log(value));
}
