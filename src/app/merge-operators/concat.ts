import { fromEvent, from } from "rxjs";
import { concat } from "rxjs";
import { map } from "rxjs/operators";
//合并类操作符 concat  只有当第一个流有尽头，第二个流才会输出
{
  const width = <HTMLInputElement>document.getElementById("width");
  const height = <HTMLInputElement>document.getElementById("height");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value)
  );
  const height$ = fromEvent(height, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value)
  );

  const concat$ = concat(width$, height$);
  concat$.subscribe((val) => console.log(val));
  // 现在只有第一个流会输出，因为第一个流是无尽头的
}

{
  const height = <HTMLInputElement>document.getElementById("height");
  const first$ = from([1, 2, 3, 4]);
  const height$ = fromEvent(height, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value)
  );

  const concat$ = concat(first$, height$);
  concat$.subscribe((val) => console.log(val));
  // 现在会先输出第一个流的值 1, 2, 3, 4然后在输入的情况下，会接着输出第二个流的值
}
