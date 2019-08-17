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
    // 导航栏
    NavBar,
    //弹出层
    Popup,
    Icon,
    //dl
    Field,
    Button,
    Cell,
    CellGroup,
    //
    Image,
    //轻提示
    Toast,
    Card,
    SubmitBar,
    // 复选框
    Checkbox,
    CheckboxGroup,
    Tag

} from 'vant';

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
    //导航栏
    Vue.use(NavBar);
    //弹出层
    Vue.use(Popup);
    Vue.use(Icon);

    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Image);
    Vue.use(Toast);
    Vue.use(Card);
    Vue.use(SubmitBar);
    Vue.use(Checkbox).use(CheckboxGroup);
    Vue.use(Tag);
}