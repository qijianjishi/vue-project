<template>
	<div>
		<div class="search_input">
			<input type="text" name="input" placeholder="搜索歌曲、歌手、专辑">
		</div>
	</div>
</template>
<script>
	export default {
  	name: 'search_input'
  	
	}
</script>
<style>
	.search_input{
		width: 100%;
		height:140px;
		border-bottom: 1px solid #ccc;
		margin-top: 240px;
		border-top:1px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fbfcfd;
	}

	.search_input input{
		width:95%;
		height:80px;
		border-radius: 50px;
		background-color: #ebecec;
		font-size: 30px;
		
	}
</style>