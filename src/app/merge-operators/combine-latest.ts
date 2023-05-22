import { fromEvent } from "rxjs";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
//合并类操作符 combineLatest  两个流都有值才会合并，任何一个流的值改变，都会输出新值
{
  const width = <HTMLInputElement>document.getElementById("width");
  const height = <HTMLInputElement>document.getElementById("height");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => Number((e.target as HTMLInputElement).value))
  );
  const height$ = fromEvent(height, "keyup").pipe(
    map((e) => Number((e.target as HTMLInputElement).value))
  );
  const combineLatest$ = combineLatest([width$, height$], (w, h) => w * h);
  combineLatest$.subscribe((val) => console.log(val));
}
