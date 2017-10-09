<template>
    <div class="subnumberStyle">
        <div class="left" @click="substrict">-</div>
        <div class="center">{{count}}</div>
        <div class="right" @click="add">+</div>
    </div>
</template>

<style>
    .subnumberStyle{
        margin-bottom: 5px;
    }

    .left,.center,.right{
        display: inline-block;
        border: 1px solid rgba(92,92,92,0.3);
        line-height: 25px;
        text-align: center;
    }

    .left,.right{
        width: 30px;
    }

    .center{
        width: 40px;
    }
</style>

<script>
    export default {
        data(){
            return {
                count:1
            }
        },
        methods:{
            add(){
                this.count++
                this.notify()
            },
            substrict(){
                if(this.count<=1){
                    return 
                }

                this.count--
                this.notify()
            },
            notify(){
                //发送发，如果发送方是子组件，可以使用this调用
                //参数1：事件名称，但是不要和系统的事件冲突，比如不要使用click
                //参数2：要传递的具体值
                this.$emit('numberchange',this.count)
            }
        }
    }
</script>


