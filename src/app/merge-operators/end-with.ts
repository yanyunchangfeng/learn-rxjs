import { of } from "rxjs";
import { endWith } from "rxjs/operators";

// 与startWith相反，在完成状态之前发射元素
{
  const data$ = of("燕云长风 —— ");
  const result$ = data$.pipe(
    endWith("长风几万里，吹度玉门关 —— https://yanyunchangfeng.com")
  );
  result$.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("I'm complete"),
  });
  // 燕云长风 ——
  // 长风几万里，吹度玉门关 —— https://yanyunchangfeng.com
  // I'm complete.
}
