<template>
    <div class="tmpl">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in swipeArray" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!--2.0 九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻咨询</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/photolist">
                    <span class="mui-icon mui-icon-email">
                        <span class="mui-badge">5</span>
                    </span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/goods/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.mint-swipe {
    height: 230px;
    margin-bottom: 10px;
    /* 防止整个页面的重绘 */
    z-index: 2;
}

img {
    height: 100%;
    width: 100%;
}

ul.mui-grid-9 {
    background: #fff;
}

/* 去除原来的字体图标 */
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}

.mui-icon {
    width: 50px;
    height: 50px;
}

.mui-icon.mui-icon-home {
    background-image: url('../../../statics/images/menu3.png');
    background-repeat: round;
}

.mui-icon.mui-icon-email {
    background-image: url('../../../statics/images/menu4.png');
    background-repeat: round;
}

.mui-icon.mui-icon-chatbubble {
    background-image: url('../../../statics/images/menu5.png');
    background-repeat: round;
}

.mui-icon.mui-icon-location {
    background-image: url('../../../statics/images/menu6.png');
    background-repeat: round;
}

.mui-icon.mui-icon-search {
    background-image: url('../../../statics/images/menu9.png');
    background-repeat: round;
}

.mui-icon.mui-icon-phone {
    background-image: url('../../../statics/images/menu10.png');
    background-repeat: round;
}
</style>

<script>
//导入需要的公共的js,这里只包括数据的请求
import common from '../../common/common.js'

//导出的是和我们home.vue这个组件对应的Vue实例
export default {
    // 在组件中data是一个函数，保持独立性
    // es6中函数的另外一种写法
    data() {
        return {
            swipeArray: []
        }
    },
    // 当组件创建完毕还没挂载时会自动调用
    created() { //需要初始化的工作
        this.getSwipeData();
    },
    methods: {
        getSwipeData() {
            const url = common.apihost + "api/getlunbo";
            this.$http.get(url).then(res => {
                this.swipeArray = res.body.message
            }, err => {
                console.error(err);
            })
        }
    }
}
</script>