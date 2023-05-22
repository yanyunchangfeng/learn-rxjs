import { fromEvent, partition } from "rxjs";
// partition 输出有两个 Observables 的数组，这两个 Observables 是通过给定的 predicate 函数将源 Observable 的值进行划分得到的。
// 该数组的第一个 Observable 发出 predicate 参数 返回 true 的源值。第二个 Observable 发出 predicate 参数返回 false 的源值。第一个像是 filter ，而第二个像是 predicate 取反的 filter 。
// 在rx7版本中作者会废弃掉
{
  const clicks = fromEvent(document, "click");
  // 将点击事件划分为点击 DIV 元素和点击其他元素
  //   const [div$, other$] = partition((ev: any) => ev.target.tagName === "DIV")(
  //     clicks
  //   );
  const [div$, other$] = partition(
    clicks,
    (ev: Event) => (ev.target as HTMLDivElement).tagName === "DIV"
  );
  div$.subscribe((val) => console.log(val, "被点击是div元素"));
  other$.subscribe((val) => console.log(val, "被点击的是除div以外的元素"));
}
