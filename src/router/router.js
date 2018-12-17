import Login from "../views/login"

export default [
    {
      path: '/',
      component: Login
    },
    {
      path: '/layout',
      component:() => import('../views/layout/Layouts.vue')
    }
  ]