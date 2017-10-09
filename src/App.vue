<template>
	<div class="tmpl">
		<mt-header fixed title="Vue练习"></mt-header>

		<!-- 全局返回按钮 -->
		<div v-show="isShowBack" @click="goBack" class="backStyle">&lt;返回</div>

		<router-view></router-view>

		<!--3.0 底部的TabBar-->
		<mt-tabbar fixed v-show="isShowTabBar">
			<!-- 为防止样式错乱，借用mintUI的样式，加class -->
			<router-link class="mint-tab-item" to="/home">
				<!-- <mt-tab-item>也会转换为一个a标签 -->
				<mt-tab-item>
					<img src="http://img07.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
				</mt-tab-item>
			</router-link>
			<router-link class="mint-tab-item" to="/category">
				<mt-tab-item>
					<img src="http://img06.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
				</mt-tab-item>
			</router-link>
			<router-link class="mint-tab-item" to="/shopcart">
				<mt-tab-item>
					<img src="http://img06.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
					<span id="badgeId" class="badgeStyle mui-badge">{{count}}</span>
				</mt-tab-item>
			</router-link>
			<router-link class="mint-tab-item" to="/mine">
				<mt-tab-item>
					<img src="http://img08.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
				</mt-tab-item>
			</router-link>
		</mt-tabbar>
	</div>
</template>

<style scoped>
a.mint-tab-item {
	padding: 3px;
}

img {
	width: 55px;
}



/* 返回按钮的样式 */

.backStyle {
	font-size: 14px;
	color: #fff;
	font-weight: 900;
	position: fixed;
	left: 10px;
	top: 10px;
	z-index: 5;
}



/* cart */

.badgeStyle {
	position: absolute;
}
</style>

<script>
// import $ from 'jquery'
// import bus from './common/commonvue'
// //借助中央数据总线，购物车的数量就由其他的组件传来了根组件 
// bus.$on('updateBadge', goodsCount => {
// 	let oldCount = $("#badgeId").text()
// 	//旧的值加上新的值
// 	let newCount = parseInt(oldCount) + goodsCount
// 	$("#badgeId").text(newCount)
// })

export default {
	data() {
		return {
			isShowBack: false,
			isShowTabBar: true,
			count: 0
		}
	},
	created() {
		this.isShowOrHiddenBackAndTarBar(this.$route.path)

		this.$root.newBus.$on('goodsCount', (goodsCount) => {
			this.count += goodsCount
		})
	},
	methods: {
		goBack() {
			//路由返回
			this.$router.go(-1)
		},
		//显示还是隐藏返回按钮
		isShowOrHiddenBackAndTarBar(path) {
			if (path == '/home') {
				this.isShowBack = false //隐藏返回按钮
				this.isShowTabBar = true //显示TarBar
			} else {
				this.isShowBack = true //显示隐藏按钮
				this.isShowTabBar = false
			}
		}
	},
	watch: {
		//监控路由的更改
		'$route': function(newValue, oldVal) {
			this.isShowOrHiddenBackAndTarBar(newValue.path)
		}
	}
}
</script>