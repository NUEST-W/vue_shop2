import vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

vue.use(VueRouter)

const routes = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

/**
 * 路由导航首位
 */
routes.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 代表从哪个路径来的
    //next 是一个函数，表示放行

    if(to.path === '/login') return next()
    const token = window.sessionStorage.getItem('token')
    if(!token) return next("/login")
    next()
})

export default routes;