<template>
    <div class="lunboStyle">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in swipeArray" :key="item.src">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
    
<style scoped>
    /*1.0 轮播图样式*/
    .swipeStyle{
        z-index: 1;
    }

    img {
        height: 100%;
        width: 100%
    }

    .mint-swipe {
        height: 250px;
        width: 100%
    }
</style>
    
<script>
    import common from '../../common/common.js'
    
    export default {
        data() {
            return {
                swipeArray : []
            }
        },
        created() {
            this.getswipeData()
        },
        methods: {
            
            getswipeData(){
                const url = common.apihost+this.swipe_url

                this.$http.get(url).then(response=>{
                    this.swipeArray = response.body.message
                })
            }
        },
        //props:['swipeArray']
        props:['swipe_url']
    }
</script>