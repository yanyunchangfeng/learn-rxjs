import { fromEvent } from "rxjs";
import { merge } from "rxjs";
import {  map } from "rxjs/operators";
//合并类操作符 merge 就是把两个流按各自的顺序叠加成一个流，它每个流的时间点在新流当中都不会变 ,不去更改两个流的任何东西
{
  const width = <HTMLInputElement>document.getElementById("width");
  const height = <HTMLInputElement>document.getElementById("height");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value)
  );
  const height$ = fromEvent(height, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value)
  );

  const merge$ = merge(width$, height$);
  merge$.subscribe((val) => console.log(val));
  // 交替的把两个值都输出来
}
