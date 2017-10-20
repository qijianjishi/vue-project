// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import songslist from './components/songs_list.vue'
import new_music from './components/new_music.vue'
import foot from './components/foot.vue'
import hot_music_img from './components/hot_music_img.vue'
import hot_list from './components/hot_list.vue'
import search_input from './components/search_input.vue'
import search_list from './components/search_list.vue'



Vue.component(songslist.name,songslist);
Vue.component(new_music.name,new_music);
Vue.component(foot.name,foot);
Vue.component(hot_music_img.name,hot_music_img);
Vue.component(hot_list.name,hot_list);
Vue.component(search_input.name,search_input);
Vue.component(search_list.name,search_list);


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
