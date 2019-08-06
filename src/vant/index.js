import Vue from 'vue'
//第三方组件
import {
    // 搜索
    Search,
    // 宫格
    Grid,
    GridItem,
    //轮播图
    Swipe,
    SwipeItem,
    Lazyload,
    // 标签栏
    Tabbar,
    TabbarItem,

} from 'vant';
//轮播图
// import {
//     Lazyload
// } from 'vant';

// options 为可选参数，无则不传




//分割线
// import {
//     Divider
// } from 'vant';


//下拉刷新
// import {
//     DropdownMenu,
//     DropdownItem
// } from 'vant';

export default () => {
    // 搜索
    Vue.use(Search);
    // 宫格
    Vue.use(Grid).use(GridItem);
    // lbt
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    // 标签栏
    Vue.use(Tabbar).use(TabbarItem);
    // Vue.use(Divider);
    // Vue.use(DropdownMenu).use(DropdownItem);


}