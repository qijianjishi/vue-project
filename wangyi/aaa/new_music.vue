<template>
	<div id="aaa">
		<div id="new"><span>{{music}}</span></div>
		<div class="music_list">
			<div class="list_li">
				<div class="music_name">扎西德勒&nbsp<span>(电影《七十七天》主题曲)</span></div>
				<div class="music_auth">江一燕-扎西德勒</div>
			</div>
		</div>

		<div class="music_list">
			<div class="list_li">
				<div class="music_name">理想三旬(live)&nbsp<span>(电影《七十七天》主题曲)</span></div>
				<div class="music_auth">谢春花-音乐好朋友 第一季</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">梨花颂&nbsp<span>(电影《七十七天》主题曲)</span></div>
				<div class="music_auth">霍尊-梨花颂</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">永不消逝&nbsp<span>电影《密战》片尾曲</span></div>
				<div class="music_auth">金志文-永不消逝</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">행복한 척 (Live)&nbsp<span></span></div>
				<div class="music_auth">秀智-박진영의 파티피플 11회 </div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">Know My Style (Major Remix featuring Swagkelly &amp; 夏之禹)&nbsp<span></span></div>
				<div class="music_auth">Cee / SwagKelly / 夏之禹-Know My Style (Major Remix featuring Swagkelly &amp; 夏之禹)</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">不如没问过&nbsp<span></span></div>
				<div class="music_auth">戴爱玲 / 国蛋-了不起寂寞</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">再见理想 (Remix版) &nbsp<span>电影《缝纫机乐队》推广曲</span></div>
				<div class="music_auth">大鹏 / 黄家驹-再见理想 (Remix版)</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">重返魔域&nbsp<span>《魔域手游》主题曲</span></div>
				<div class="music_auth">窦唯-重返魔域</div>
			</div>
		</div>


		<div class="music_list">
			<div class="list_li">
				<div class="music_name">Is That For Me&nbsp<span></span></div>
				<div class="music_auth">Alesso / Anitta-Is That For Me</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
  name: 'new_music',
  data(){
  	return{
  		music:"最新音乐"
  	}
  }

}


</script>
<style>
	#new{
		width: 100%;
    	height: 90px;
    	background:#fff;
    	font-size: 34px;
    	line-height: 90px;
    	margin-top: 80px;
	}
	#new span{
		width:200px;
		height:50px;
		margin-left: 20px;
		font-size: 35px;
	}
	.music_list{
		width:100%;
	}
	.music_list .list_li{
		width:90%;
		height:120px;
		background:#fff;
		margin-left:20px;
		border-bottom: 1px solid #ccc;

	}
	.music_list .list_li .music_name{
		font-size: 40px;
		width:100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.music_list .list_li .music_name span{
		color:#ccc;
		font-size: 45px;

	}
	.music_list .list_li .music_auth{
		font-size: 30px;
		color:#ccc;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>