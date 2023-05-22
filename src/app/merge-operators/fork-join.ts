import { ajax } from "rxjs/ajax";
import { forkJoin } from "rxjs";
// forkJoin 当所有的Observable 完成时，发射最后的值。
{
  const result$ = forkJoin({
    google: ajax.getJSON("https://api.github.com/users/google"),
    microsoft: ajax.getJSON("https://api.github.com/users/microsoft"),
    users: ajax.getJSON("https://api.github.com/users"),
  });
  result$.subscribe((val) => console.log(val));
  // { google: object, microsoft: object, users: array }
}
