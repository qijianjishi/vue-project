<template>
	<div>
		<div id="search_list">
			<span>热门搜索</span>
			<ul class="list">
				<li><a href="">RADWIMPS</a></li>
				<li><a href="">理想三旬</a></li>
				<li><a href="">金玟岐</a></li>
				<li><a href="">朴振荣的Party People</a></li>
				<li><a href="">陈奕迅</a></li>
				<li><a href="">Subeme La Radio</a></li>
				<li><a href="">Hop</a></li>
				<li><a href="">Time</a></li>
				<li><a href="">白夜</a></li>
				<li><a href="">Got7</a></li>
			</ul>
		</div>
	</div>
</template>
<style>
	#search_list{
		width:100%;
		height:500px;
		background:#fbfcfd;;	
	}
	#search_list span{
		font-size: 35px;
		color:#666;
		line-height: 40px;
		display: block;
		width:100%;
		height:40px;
		padding-top: 10px;
		
		
	}
	#search_list .list{
		
		    margin: 10px 0 7px;
	}
	#search_list .list li{
	display: inline-block;
    height: 70px;
    margin-top: 10px;
    margin-right: 8px;
    margin-left:50px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 40px;
    line-height: 70px;
    color: #333;
    border:1px solid #ccc;
    border-radius:40px;
	}
	#search_list .list li a{
		text-decoration:none;
		color:#333;
		margin-left: 20px;
		margin-right: 20px;
    	margin-bottom: 16px;
	}
</style>
<script>
	export default{
		name:'search_list'
	}
</script>