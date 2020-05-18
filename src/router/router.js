import vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            component:Login
        }
    ]
})