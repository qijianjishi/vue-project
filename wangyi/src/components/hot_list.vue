<template>
	
		<div id="hot_list">
		
		<div class="music_list" v-for="item in list.songlist">
			<div class="list_li">
				<div class="music_name">{{item.data.songname}}<span>{{item.data.albumname}}</span></div>
				<div class="music_auth">{{item.data.singer[0].name}}</div>
			</div>
		</div>
	</div>

</template>
<script>
	import axios from 'axios'
	export default {
		name: 'hot_list',
		data:function(){
		  return {
		    list : []
		   
		  }
		},
		mounted() {
          
           	var that = this
	      	axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1508306581587`)
	      		.then(function (response){
	      		console.log(response)
		     
		        that.list = response.data
		        
		    })            
		}
	}
</script>
<style >
	#hot_list .music_list{
		width:100%;
		height:100px;
	}
	#hot_list .music_list .list_li{
		width:90%;
		height:120px;
		background:#fff;
		margin-left:20px;
		border-bottom: 1px solid #ccc;

	}
	#hot_list .music_list .list_li .music_name{
		font-size: 40px;
		width:100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	#hot_list .music_list .list_li .music_name span{
		color:#ccc;
		font-size: 45px;

	}
	#hot_list .music_list .list_li .music_auth{
		font-size: 30px;
		color:#ccc;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>