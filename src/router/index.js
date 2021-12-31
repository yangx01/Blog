import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
 mode:'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/index'),
      meta: {
        pageTitle: '文章列表'
      }
    }
  ]
})
