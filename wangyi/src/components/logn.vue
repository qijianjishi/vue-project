<template>
	<div>
		<div id="logn">
			<div class="logn_box">
				手机号码：<input v-model="username" type="text" placeholder="请输入11位手机号码"><br>
				密码：<input v-model="password" type="password" placeholder="请设置密码"><br>
				<button @click="login()">登陆</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
    export default {
      name: 'logn',
    data() {
        return {
            username : '',
            password : ''
        }
    },
    methods:{
      login() {
      			var that=this;
              axios.post("/api/logn","username="+this.username+"&password="+this.password)
              .then(function(res){
                if(res.data){
                  that.$router.push('/')
                }else{
                  alert('lose')
                }
              }).catch(function(error){
                console.log('xxx')
              })
           }      
      }

      }

</script>
<style>
	#logn{
		width:100%;
		height:1750px; 
			
	}
	#logn .logn_box{
		width:100%;
		height:300px;
		background:#ccc;
		margin-top: 240px;
		
		font-size: 50px;
	}
	#logn .logn_box input{
		width:60%;
		height: 70px;
		font-size: 50px;
		
		border: 1px solid #000;	
		margin-bottom: 20px;
		margin-left: 10%;			
	}
	#logn .logn_box button{
		width:200px;
		height:100px;
		background:#fff;
		font-size: 50px;
		margin-left: 35%;
	}
</style>