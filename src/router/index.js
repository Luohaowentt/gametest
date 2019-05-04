import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Skills from '@/views/Skills'
import Equipment from '@/views/Equipment'
import Knapsack from '@/views/Knapsack'
import PlayerMain from '@/views/PlayerMain'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/attribute'
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/knapsack',
      name: 'Knapsack',
      component: Knapsack
    },
    {
      path: '/attribute',
      name: 'PlayerMain',
      component: PlayerMain
    }
  ]
})
