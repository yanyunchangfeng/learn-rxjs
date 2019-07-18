import { generate } from 'rxjs';
// generate 有三个参数，第一个为初始值，第二个为条件函数，第三个为iterateFunc
//第四个为resultFun
{
    const generate$ = generate(3, x => x<=8,x => x+2, x => '.'.repeat(x));
    generate$.subscribe( val => console.log(val))
    //  ...
   //  .....
  //  .......
} 