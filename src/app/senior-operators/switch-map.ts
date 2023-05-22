import { fromEvent, interval } from "rxjs";
import { map, switchMap } from "rxjs/operators";
//高阶操作符  作用：拍扁数据流，比如说一个流里又开始了一条新流。
// switchMap 一旦有新的外层元素进来，就会抛弃掉这个元素之前的外层元素所关联的子元素。
{
  const width = <HTMLInputElement>document.getElementById("width");
  const width$ = fromEvent(width, "keyup").pipe(
    map((e) => (e.target as HTMLInputElement).value),
    switchMap((_) => interval(100)) //拍扁数据流，降维
  );
  width$.subscribe((val) => console.log(val));
  // 始终输出最新的流
}
// 例子 比如说现在有删除文章的一个流，在文章流里面做一个操作，删除所有评论，因为一个文章带着所有的评论，所以这些评论是文章的子节点，在外层是删除文章，在内层是删除评论。
// 如果正在删除第一篇文章，突然来了删除第二篇文章的请求，你的原有删除第一篇文章的评论还要不要继续进行，如果要继续进行，就是mergeMap，
// 如果不要继续进行，如果删除第二篇文章的请求过来后，就不要理第一篇文章的删除评论，只关心第二篇文章的逻辑，就用switchMap.
