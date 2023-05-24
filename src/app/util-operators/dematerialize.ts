import { from, NextNotification, ErrorNotification } from "rxjs";
import { dematerialize } from "rxjs/operators";
// 将 Notification 对象的 Observable 转换成它们所代表的发送。
// 将 Notification 对象拆开成实际的 next、 error 和 complete 发送。它与 materialize 是相反的。
const notifNext: NextNotification<string> = { kind: "N", value: "Success" };
const notifError: ErrorNotification = { kind: "E", error: "Error" };
{
  const source$ = from([notifNext, notifError]).pipe(
    // 将通知对象转换为实际的值
    dematerialize()
  );
  const sub = source$.subscribe({
    next: (val) => console.log(`Next Value :${val}`),
    error: (val) => console.log(`Error Value :${val}`),
  });
  //output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
}
