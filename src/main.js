import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
import MintUI from 'mint-ui'
import moment from 'moment'
import VuePreview from 'vue-preview'

//定义的全局过滤器
//时间格式化过滤器
//参数1：过滤器的名称
//参数2：过滤器执行的函数
Vue.filter('dateFmt', (input, formatString) => {
    const lastFormatString = formatString || "YYYY-MM-DD HH:mm:ss"

    //moment中接的,要格式化的原始数据,如果不传，就格式化当前时间
    //format格式化后的数据格式,如果不传，就是原始的格式
    return moment(input).format(lastFormatString)
})

// 使用基于Vue的第三方包的写法
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePreview)

Vue.prototype.$axios = axios

// 导入mint-ui
import 'mint-ui/lib/style.min.css'
// 导入mui
import '../statics/mui/css/mui.min.css'
import '../statics/mui/css/icons-extra.css'
// 最后导入自己的css
import '../statics/css/site.css'

//导入Vue项目中要渲染的第一个页面的文件
//vue-loader会帮我们自动把那个当文件组件导出
import App from './App.vue'


//导入我们的所有组件
import home from './components/home/home.vue'
import category from './components/category/category.vue'
import shopcart from './components/shopcart/shopcart.vue'
import mine from './components/mine/mine.vue'
import newslist from './components/news/newslist.vue'
import newdetail from './components/news/newsdetail.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import pictureAndText from './components/goods/pictureAndText.vue'
import goodscomment from './components/goods/goodscomment.vue'

//创建路由对象，设置路由规则
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/shopcart',
            component: shopcart
        },
        {
            path: '/mine',
            component: mine
        },
        {
            path: '/news/newslist',
            component: newslist
        },
        {
            path: '/news/newsdetail/:newsId',
            component: newdetail
        },
        {
            path: '/photo/photolist',
            component: photolist
        },
        {
            path: '/photo/photoinfo/:photoId',
            component: photoinfo
        },
        {
            path: '/goods/goodslist',
            component: goodslist
        },
        {
            path: '/goods/goodsinfo/:goodsId',
            component: goodsinfo
        },
        {
            name: 'pictureAndText',
            path: '/goods/pictureAndText',
            component: pictureAndText
        },
        {
            path: '/goods/goodscomment',
            component: goodscomment
        }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})