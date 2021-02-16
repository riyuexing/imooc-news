<template>
	<view class="navbar">
		<view class="navbar-search">
			<view class="navbar-search_icon"></view>
			<view class="navbar-search_text">uni-app、vue</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 15px;
		width: 100%;
		height: 45px;
		background-color: $mk-base-color;
		box-sizing: border-box;

		.navbar-search {
			display: flex;
			align-items: center;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border-radius: 15px;
			background-color: #FFFFFF;

			.navbar-search_icon {
				width: 10px;
				height: 10px;
				border: 1px red solid;
				margin-right: 10px;
			}

			.navbar-search_text {
				font-size: 12px;
				color: #999999;
			}
		}
	}
</style>
