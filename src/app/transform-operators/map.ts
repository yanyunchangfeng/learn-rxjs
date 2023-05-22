import { fromEvent, Observable } from "rxjs";
import { map } from "rxjs/operators";

//转换类操作符 map
{
  const width = <HTMLInputElement>document.getElementById("width");
  const width$ = fromEvent(width, "keyup").pipe(
    map((event) => (event.target as HTMLInputElement).value)
  );
  width$.subscribe((value) => console.log(value));
  // 当键盘弹起事件触发时，输出元素的值
}
