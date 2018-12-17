import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
const routesMap = new Router({
  routes
})
routesMap.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})
routesMap.afterEach((to,from) =>{
  NProgress.done()
})


export default routesMap
