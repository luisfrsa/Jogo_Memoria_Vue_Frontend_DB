// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
require('./assets/scss/styles.scss')

import Vue from 'vue'
import App from './App'
import router from './router'
import Greeting from './components/Greeting'
import Game from './components/Game'
import JogoFinalizado from './components/JogoFinalizado'

Vue.component('greeting', Greeting);
Vue.component('game', Game);
Vue.component('jogo-finalizado', JogoFinalizado);

Vue.http.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUxMzk2NzkxNn0.RpXt95Bbr1TZV_sYHXZb9PVR3d-hqpBtBjuZo5LfmLfQWKgS3uiJLzPd_udf9J4_lkgjxazZMoG70mZYqZhVrw';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
  	emulateJSON: true,
  	emulateHTTP: true
  }
})

