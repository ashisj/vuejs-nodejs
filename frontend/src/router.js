import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Index from "./components/Index.vue";
import Login from "./components/Login.vue";
import Registration from "./components/Registration.vue";
import Logout from "./components/Logout.vue";
Vue.use(Router);

let router = new Router({
  mode:'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'Index',
      component:Index
    },
    {
      path:'/Login',
      name:'Login',
      component:Login,
      meta: { 
        guest: true
      }
    },
    {
      path:'/register',
      name:'Registration',
      component:Registration,
      meta: { 
        guest: true
      }
    },
    {
      path:'/home',
      name: 'Home',
      component:Home,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path:'/logout',
      name: 'Logout',
      component:Logout,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      //console.log(document.cookie.split()[0].split("=")[1] == undefined);
      
    if (document.cookie.split()[0].split("=")[1] === undefined) {
      next({
        path: '/login'
        ,params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  }
  else if(to.matched.some(record => record.meta.guest)) {
	    if(document.cookie.split()[0].split("=")[1] === undefined){
	        next()
	    }
	    else{
	        next({ name: 'Home'})
	    }
  } else {
    next() 
  }
})


export default router