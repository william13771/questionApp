import Login from "../views/login"

export default [
    {
      path: '/',
      component: Login
    },
    {
      path: '/layout',
      component:() => import('../views/layout/Layouts.vue'),
      children:[
        {
          	path:'',
        	  component:() => import('../views/index')
        },
        {
            path:'index',
            component:() => import('../views/index')
        },
        {
            path:'login',
            component:Login
        }
      ]
    }	
  ]