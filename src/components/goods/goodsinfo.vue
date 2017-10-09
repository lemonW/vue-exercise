<template>
    <div class='tmpl'>
        <!-- 1.0 轮播图 -->
        <subswipe :swipe_url="'api/getthumimages/'+$route.params.goodsId"></subswipe>
        <!-- <subswipe :swipeArray="swipeArray"></subswipe> -->

        <!-- 商品描述 -->
        <div class="priceStyle">
            <h4>{{goodsInfo.title}}</h4>
            <p class="price">市场价:￥
                <del>{{goodsInfo.market_price}}</del>&nbsp;&nbsp; 销售价:￥
                <span>{{goodsInfo.sell_price}}</span>
            </p>
            <!-- 子组件的传值，属性名为子组件中的自定义监听事件名 -->
            <subnumber @numberchange="receiveSubNumberCount"></subnumber>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button @click="addToShopCart" type="danger" size="small">加入购物车</mt-button>
        </div>

        <!-- 商品信息-->
        <div class="paramsStyle">
            <h5>商品参数</h5>
            <ul>
                <li>商品货号:{{goodsInfo.goods_no}}</li>
                <li>库存情况:剩余{{goodsInfo.stock_quantity}}件</li>
                <li>上架时间:{{goodsInfo.add_time | dmtDate}}</li>
            </ul>
        </div>

        <!-- 图文介绍&商品评论-->
        <div class="pictureInfoAndCommentStyle">
            <mt-button type="primary" @click="goPictureAndText" plain size="large">图文介绍</mt-button>
            <mt-button @click="goGoodsComment()" class="commentStyle" type="danger" plain size="large">商品评论</mt-button>
        </div>
    </div>
</template>
    
<style scoped>
.swipeStyle {
    margin: 10px;
    padding: 10px;
    border: 1px solid rgba(92, 92, 92, 0.3);
    border-radius: 5px;
}

.sliderStyle,
.priceStyle,
.paramsStyle,
.pictureInfoAndCommentStyle {
    margin: 10px;
    padding: 10px;
    border: 1px solid rgba(92, 92, 92, 0.3);
    border-radius: 5px;
}

.priceStyle h4 {
    font-size: 16px;
    color: #0094ff;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.price span {
    color: red;
    font-size: 16px;
}

.paramsStyle h5 {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.paramsStyle ul {
    padding: 0
}

.paramsStyle li {
    list-style: none;
}

.commentStyle {
    margin-top: 20px;
}
</style>
    
<script>
import common from '../../common/common.js'
import { Toast } from 'mint-ui'

//导入子组件
import subswipe from '../subcomponents/subswipe.vue'
import subnumber from '../subcomponents/subnumber.vue'

//导入公共的Vue对象
// import bus from '../../common/commonvue.js'

//按需导入我们shopCartTool中我需要的函数
//addGoods是一个函数，{}
import { addGoods } from '../../common/shopCartTool.js'

export default {
    data() {
        return {
            goodsInfo: {},
            goodsCount: 1
        }
    },
    created() {
        this.getGoodsInfoData()
    },
    methods: {
        //获取商品明细数据
        getGoodsInfoData() {
            const url = common.apihost + "api/goods/getinfo/" + this.$route.params.goodsId
            //axios并非基于vue，此处保证this的指向
            const _this = this
            this.$axios.get(url).then(response => {
                _this.goodsInfo = response.data.message[0]
            }).catch(err => {
                console.log(err)
            })
        },
        //跳转到图文介绍组件,编程式导航
        goPictureAndText() {
            this.$router.push({ name: 'pictureAndText', params: { goodsId: this.$route.params.goodsId } })
        },
        //跳转到商品评论,带参数查询的编程式导航
        goGoodsComment() {
            this.$router.push({ path: '/goods/goodscomment', query: { goodsId: this.$route.params.goodsId } })
        },
        //接收子组件传递过来的商品的数量的值
        receiveSubNumberCount(count) {
            //将子组件传递过来的值，存储到自己的data模型中
            this.goodsCount = count
        },
        //加入购物车
        addToShopCart() {
            //1、非父子组件传值，传值给App.vue，更新购物车徽标值
            // bus.$emit('goodsCount', this.goodsCount)
            this.$root.newBus.$emit('goodsCount',this.goodsCount)
            //2.存储到localstorage key,value
            var goodsObj = {
                "goodsId": this.$route.params.goodsId,
                "count": this.goodsCount
            }
            addGoods(goodsObj)

            Toast({
                message: '成功加入购物车',
                position: 'middle',
                duration: 500
            })
        }
    },
    components: {
        subswipe,
        subnumber
    }
}
</script>