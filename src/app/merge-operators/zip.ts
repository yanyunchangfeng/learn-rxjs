import { fromEvent, zip } from "rxjs";
import { map } from "rxjs/operators";
//合并类操作符 zip 对齐 想象成拉链的对齐 , 两个流都有值才会输出，必须是一一对应，最慢的流决定了最终的速度
{
  const width = <HTMLInputElement>document.getElementById("width");
  const height = <HTMLInputElement>document.getElementById("height");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => Number((e.target as HTMLInputElement).value))
  );
  const height$ = fromEvent(height, "keyup").pipe(
    map((e) => Number((e.target as HTMLInputElement).value))
  );

  const zip$ = zip(width$, height$, (w, h) => w * h);
  zip$.subscribe((val) => console.log(val));
  // 两个流都有值才会合并，任何一个流的值改变，都会输出新值
}
