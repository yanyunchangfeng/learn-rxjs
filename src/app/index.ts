
// Observable  的性质
// 三种状态 next,error,complete

// 永不结束 = > interval(1000)
// Never = > 不发射任何元素，流里没有任何元素,不结束,就是一个空的，没有状态的
// Empty = > 不发射任何元素，流里没有元素,直接进入complete 状态 有结束
// Throw = > 不发射任何元素，流里没有元素，直接进入error 状态 

// import './create-operators/interval'
// import './create-operators/timer'
import './create-operators/from'
// import './create-operators/from-event'
// import './create-operators/of'