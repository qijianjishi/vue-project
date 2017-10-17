<template>
	<div id="foot">
		<div class="logo">{{music}}</div>
		<div class="download">{{download}}</div>
	</div>
</template>

<script>
export default {
  name: 'foot',
  data (){
  	return{
  		music:"网易云音乐",
  		download:"打开APP,发现更多好音乐>"
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
		width:60%;
		height:50px;
		border:1px solid #ea9e9b;
		border-radius:30px;
		position:absolute;
		top:200px;
		right:20%;

	}
</style>