import { fromEvent, interval } from "rxjs";
import { debounce, map } from "rxjs/operators";

//过滤类操作符 debounce 指定间隔时间，比如一个输入框，对于规定时间类的输入,完全不理会，也就是不输出

// debounce
{
  const width = <HTMLInputElement>document.getElementById("width");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value),
    debounce(() => interval(1000)) //时间可以是非固定的，随着条件做动态化,
  );
  width$.subscribe((value) => console.log(value));
  // 小于1000ms内的输入不做输出,只有当停下来的间隔时间超过1000ms，才做值的输出
}
