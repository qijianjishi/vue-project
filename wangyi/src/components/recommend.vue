<template>
	<div>
		<nav>
			<router-link to>推荐音乐</router-link>
			<router-link to>热歌榜</router-link>
			<router-link to>搜索</router-link>
		</nav>
	</div>
</template>
<script>
export default {
  name: 'nav_com'
}
</script>
<style>

	nav{
	width:100%;
	height:80px;
	background:#fff;
	display:flex;
	justify-content: space-between;
	border-bottom:1px solid #ccc;
	position:fixed;
	z-index: 100;
	top:150px;
	}
	nav a{
	display:block;
	width:27%;
	height:80px;
	color:#000;
	font-size:30px;
	text-decoration:none;
	text-align:center;
	line-height:80px;
	}

</style>