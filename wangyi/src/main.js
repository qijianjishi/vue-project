// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Nav_com from './components/recommend.vue'
import songslist from './components/songs_list.vue'
import new_music from './components/new_music.vue'
import foot from './components/foot.vue'

Vue.component(Nav_com.name,Nav_com);
Vue.component(songslist.name,songslist);
Vue.component(new_music.name,new_music);
Vue.component(foot.name,foot);


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
