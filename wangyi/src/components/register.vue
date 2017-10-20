<template>
	<div>
		<div id="register">
			<div class="register_box">
				手机号码：<input type="text" placeholder="请输入11位手机号码" v-model="username"><br>
				密码：<input type="password" placeholder="请设置密码" v-model="password"><br>
				<button @click="login">注册</button>
				
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
    export default {
      name: 'HelloWorld',
    data() {
        return {
            username : '',
            password : ''
        }
    },
    methods:{
      login() {
      			var that=this;
              axios.post("/api/register","username="+this.username+"&password="+this.password)
              .then(function(res){
                if(res.data){
                  that.$router.push('/logn')
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
	#register{
		width:100%;
		height:1750px; 
		background:rgba(226,25,24,.8);		
	}
	#register .register_box{
		width:100%;
		height:300px;
		background:#ccc;
		margin-top: 240px;
		
		font-size: 50px;
	}
	#register .register_box input{
		width:60%;
		height: 70px;
		font-size: 50px;
		margin-bottom: 20px;
		margin-left: 10%;		
	}
	#register .register_box button{
		width:200px;
		height:100px;
		background:#fff;
		font-size: 50px;
		 margin-left: 35%;
	}
</style>