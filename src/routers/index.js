import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import myRouter from './my'
// import movie from './movie';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,  //此处路径可变
  routes: [
    movieRouter,
    myRouter,
    cinemaRouter
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home  //第一种写法 运行一开始就会被加载
    // },
    
  ]
})
