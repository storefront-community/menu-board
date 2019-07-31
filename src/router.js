import Vue from 'vue'
import Router from 'vue-router'
import MenuBoard from './views/MenuBoard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menuBoard',
      component: MenuBoard
    }
  ]
})
