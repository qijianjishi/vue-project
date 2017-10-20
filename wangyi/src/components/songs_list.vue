 <template>
	<div class='ccc'>
		<div class="songslist"><span>推荐歌单</span></div>
		<div class="remd_ul">
			<a class="remd_li" href="#">
				<div class="remd_img">
					<img class="u-img" src="http://p1.music.126.net/oZeExvlxR_c_4fJUyMUY-g==/109951163044279442.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
					<span class="listen">117.5万</span>					
				</div>
				<p class="remd_text">有些歌听不得、就像回不去的从前！</p>
			</a>


			<a class="remd_li" href="#">
				<div class="remd_img">
					<img class="u-img" src="http://p1.music.126.net/pg0ZZNW9gDM3kQn5J_3W4w==/109951163032868359.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
					<span class="listen">117.5万</span>					
				</div>
				<p class="remd_text">我走了，去下一站喜欢的下个人了</p>
			</a>


			<a class="remd_li" href="#">
				<div class="remd_img">
					<img class="u-img" src="http://p1.music.126.net/dlXhKkvCcbJ8hF6KPMJT7w==/19166686695756236.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
					<span class="listen">117.5万</span>					
				</div>
				<p class="remd_text">李俊杰正确的打开方式</p>
			</a>
		</div>


		<div class="remd_ur" >
			<a class="remd_li" href="#">
				<div class="remd_img">
					<img class="u-img" src="http://p1.music.126.net/3LbMYwTiQD5U3MCSgDPgdA==/109951163035317628.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
					<span class="listen">117.5万</span>					
				</div>
				<p class="remd_text">华语 哭泣使人乞讨，思念使人奔跑</p>
			</a>


			<a class="remd_li" href="#">
				<div class="remd_img">
					<img class="u-img" src="http://p1.music.126.net/1BQFT-akODSLM93bj4CQ2Q==/109951163041556034.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
					<span class="listen">117.5万</span>					
				</div>
				<p class="remd_text">电音史上最伟大的250首EDM音乐作品</p>
			</a>


			<a class="remd_li" href="#">
				<div class="remd_img">
					<img class="u-img" src="http://p1.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp">
					<span class="listen">117.5万</span>					
				</div>
				<p class="remd_text">古风殇恋 | 待到红颜消 杳杳无归期</p>
			</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'songslist',
  data (){
  	return{
  		list:[]
  	}
  },
  mounted:function(){
  	var that = this;
  	axios.get('/weapi/personalized/newsong')
  	.then(function(res){
  		that.list = res.data.data
  	})
  }
}
</script>
<style>
	.songslist{
		width: 100%;
    	height: 90px;
    	background:#fcfcfd;
    	font-size: 34px;
    	line-height: 90px;
    	margin-top: 230px;
	}
	.songslist span{
		width:200px;
		height:50px;
		margin-left: 20px;
		font-size: 35px;
	}
	.remd_ul .remd_li{
		float:left;
		width:326px;
		height:326px;
		
		text-decoration:none;
		color:#000;
	}
	.remd_li{
		text-decoration:none;
		color:#000;
		
	}
	.remd_ul .remd_li .remd_img{
		position:relative;
	}
	.remd_ul .remd_li .remd_img img{
		width:100%;
		height:100%px;
	}
	.remd_ul .remd_li .remd_img .listen{
		position: absolute;
    	right: 5px;
    	top: 2px;
    	z-index: 3;
    	padding-left: 13px;
    	color: #fff;
    	font-size: 20px;
    	background-position: 0;
    	background-repeat: no-repeat;
    	background-size: 11px 10px;
	}
	.remd_ul .remd_li p{
		font-size: 25px;
		width:280px;
		text-align: left;
		margin-left: 25px;
	}



	.remd_ur .remd_li{
		margin-top:100px;
		float:left;
		width:326px;
		height:326px;
	}
	.remd_ur .remd_li .remd_img{
		position:relative;
	}
	.remd_ur .remd_li .remd_img img{
		width:100%;
		height:100%px;
	}
	.remd_ur .remd_li .remd_img .listen{
		position: absolute;
    	right: 5px;
    	top: 2px;
    	z-index: 3;
    	padding-left: 13px;
    	color: #fff;
    	font-size: 20px;
    	background-position: 0;
    	background-repeat: no-repeat;
    	background-size: 11px 10px;
	}
	.remd_ur .remd_li p{
		font-size: 25px;
		width:280px;
		text-align: left;
		margin-left: 25px;
	}
</style>
