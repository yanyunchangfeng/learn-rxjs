import {fromEventPattern} from 'rxjs';
// 从一个基于 addHandler/removeHandler 方法的API创建 Observable。
// 将任何 addHandler/removeHandler 的API转化为 Observable。
// 创建 Observable ，该 Observable 通过使用addHandler 和 removeHandler添加和删除事件处理器,
//  使用可选的选择器函数将事件参数转化为结果. addHandler当输出 Observable 被订阅的时候调用, removeHandler 方法在取消订阅的时候被调用。
{
    const addClickHandler = (handle:EventListener)=>{document.addEventListener('click',handle);console.log('我添加监听')}
    const removeClickHandler = (handle:EventListener)=>{document.removeEventListener('click',handle);console.log('我取消监听')}
    const clicks$ = fromEventPattern(addClickHandler,removeClickHandler,(ev) => ev.clientX);
    // 先调用addClickHandler函数，然后发出 DOM document 上的点击事件
    const subscription = clicks$.subscribe(x => console.log(x));
    // subscription.unsubscribe() 调用removeClickHandler函数，取消订阅
}