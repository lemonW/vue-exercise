<template>
    <div class="tmpl">
        <!-- 1.0 标题 -->
        <div class="title">
            <h4>{{pictureAndTextData.title}}</h4>
        </div>
        <!-- 2.0 内容 -->
        <div class="content">
            <span v-html="pictureAndTextData.content"></span>
        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js'

    export default {
        data(){
            return {
                pictureAndTextData : {}
            }
        },
        created(){
            this.getPicturnAndTextData()
        },
        methods:{
            getPicturnAndTextData(){
                const url =common.apihost + "api/goods/getdesc/"+this.$route.params.goodsId

                this.$http.get(url).then(res=>{
                    this.pictureAndTextData = res.body.message[0]
                },err=>{

                })
            }
        }
    }
</script>

<style>
    .title h4{
        color:#0094ff;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92,92,92,0.3);
    }

    .title,.content{
        padding: 10px;
    }
</style>
