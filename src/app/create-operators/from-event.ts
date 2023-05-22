import { fromEvent } from "rxjs";
//创建类操作符
//  fromEvent 可以把事件转化为Observable
{
  const width = <HTMLInputElement>document.getElementById("width");
  const width$ = fromEvent(width, "keyup").pipe();
  width$.subscribe((event: Event) =>
    console.log((event.target as HTMLInputElement).value)
  );
  // 当键盘弹起事件触发时，输出元素的值
}
