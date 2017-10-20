<template>
	<div id="hot_music">
		<div class="bang">
			<div class="bang1">热歌榜</div>
			<div class="bang2">更新日期：10月12日</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'hot_music_img',
  
}
</script>
<style>
	#hot_music{
		width:100%;
		height:440px;
		background:red;
		background-image:url(http://s3.music.126.net/m/s/img/hot_music_bg_3x.jpg?2bfefd3ba37eaffbd66b7d108b9de26a);
		margin-top: 245px;
		position:relative;
	}
	#hot_music .bang .bang1{
		width:300px;
		height:150px;
		font-size: 100px;
		color:#fff;
		position:absolute;
		top:100px;
		left:100px;
		font-weight: bold;
	}
	#hot_music .bang .bang2{
		width:300px;
		height:50px;
		font-size: 30px;
		color:#fff;
		position:absolute;
		top:230px;
		left:100px;
	}
</style>