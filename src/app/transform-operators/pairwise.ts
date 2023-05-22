import { fromEvent } from "rxjs";
import { pairwise, map } from "rxjs/operators";
// 将一系列连续的发送成对的组合在一起，并将这些分组作为两个值的数组发出。
// 将当前值和前一个值作为数组放在一起，然后将其发出。
// 源 Observable 的第N个发送会使输出 Observable 发出一个数组 [(N-1)th, Nth]，即前一个 值和当前值的数组，它们作为一对。
// 出于这个原因，pairwise 发出源Observable的第二个和随后的发送，而不发送第一个，因为它没有前一个值。
{
  const clicks$ = fromEvent(document, "click");
  const distance$ = clicks$.pipe(
    pairwise(),
    map((pair) => {
      console.log(pair, "pair");
      let x0 = (pair[0] as MouseEvent).clientX;
      let y0 = (pair[0] as MouseEvent).clientY;
      let x1 = (pair[1] as MouseEvent).clientX;
      let y1 = (pair[1] as MouseEvent).clientY;
      return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
    })
  );
  // 每次点击(从第二次开始)，都会发出与前一次点击的相对距离
  distance$.subscribe((val) => console.log(val));
}
