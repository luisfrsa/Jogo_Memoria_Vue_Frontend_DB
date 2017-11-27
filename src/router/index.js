import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Home from '@/components/Home'
import Greeting from '@/components/Greeting'
import Game from '@/components/Game'
import Ranking from '@/components/Ranking'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  base:__dirname,
  mode:'history',
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/ranking',name: 'Ranking',component: Ranking},
  ]
})
