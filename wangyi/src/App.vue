<template>
  <div id="app">
    <div class="header">
      <h1>网易云音乐</h1>
      <div class="download"><a href="https://itunes.apple.com/app/id590338362">下载APP</a></div>
      <div class="register"><router-link to="/register">注册</router-link></div>
      <div class="sign"><router-link to="/logn">登录</router-link></div>
    </div>
    <nav>
      <router-link to="/">推荐音乐</router-link>
      <router-link to="/re">热歌榜</router-link>
      <router-link to="/search">搜索</router-link>
    </nav>
 
        
        <router-view/>

  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/index.css">

</style>
<style>
nav{
      display: flex;

    justify-content: center;
    
    align-items: center;
    width: 100%;
    height: 80px;
    background: #fff;
     position: fixed;
    margin-top: 150px;
    z-index: 100;
}
nav a{
    display: block;
    width: 33.3%;
    height:40px;
    text-align: center;
    cursor: pointer;
    line-height:80px;
    font-size: 40px;
    text-decoration:none;
    color: #000;
    line-height: 50px;
}
nav a:active{
  color:red;
}
</style>


