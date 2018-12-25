import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend' // 推荐页面
import Singer from '../components/singer/singer' // 歌手页面
import Rank from '../components/rank/rank' // 排行
import Search from '../components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
