import { fromEvent } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

//过滤类操作符 distinctUntilChanged 与上一个输入的值不相同时，才做输出

// distinct
{
  const width = <HTMLInputElement>document.getElementById("width");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value),
    distinctUntilChanged()
  );
  width$.subscribe((value) => console.log(value));
  // 仅与上一个输出的值做比较，改变了即输出
}
