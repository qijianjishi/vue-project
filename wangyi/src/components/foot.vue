<template>
	<div id="foot">
		<div class="logo">{{music}}</div>
		<div class="download"><a href="http://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fhome%3Fhome&dl=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid590338362">{{download}}</a></div>
		<p>{{shangbiao}}</p>
	</div>
</template>

<script>
export default {
  name: 'foot',
  data (){
  	return{
  		music:"网易云音乐",
  		download:"打开APP,发现更多好音乐>",
  		shangbiao:"网易公司版权所有©1997-2017   杭州乐读科技有限公司运营"
  	}
  }
}
</script>

<style>
	#foot{
		width:100%;
		height:500px;
		position:relative;
		background-image: url(//s3.music.126.net/m/s/img/recommand_bg_3x.png?f3a9aaa…);
	}
	#foot .logo{
		width:400px;
		height:100px;
		font-size: 80px;
		position:absolute;
		top:150px;
		right:30%;

	}
	#foot .download{
		width:70%;
		height:70px;
		border:2px solid #ea9e9b;
		border-radius:30px;
		position:absolute;
		top:270px;
		right:14%;
		
		font-size: 50px;
		text-align: center;
	}
	#foot .download a{
		text-decoration:none;
		color:#ea9e9b;
	}
	#foot p{
		color:#ccc;
		position: absolute;
		top:356px;
		right:23%;
		font-size: 20px;
	}
</style>