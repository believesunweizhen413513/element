import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Mach from '../pages/Mach.vue'
import Mine from '../pages/Mine.vue'
import Main from '../pages/Main.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import More from '../pages/More.vue'
import Location from '../pages/Location.vue'
import Goodscar from '../pages/Goodscar.vue'
import Loging from '../pages/Loging.vue'

const routes = [
    // 当http/localhost:8080为home时加载Home组件，为recover时加载Recover组件
    {
        path: '/main', name: 'main', component: Main,
        children: [
            // 注意，路由children嵌套里面的path不需要斜杠
            { path: 'home', name: 'home', component: Home },
            { path: 'recover', name: 'recover', component: Recover },
            { path: 'mach', name: 'mach', component: Mach },
            { path: 'mine', name: 'mine', component: Mine }
        ]
    },
    {
        // path: '/detail',
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/login',
        // path: '/detail/:id',带参数
        name: 'login',
        component: Login
    },
    {
        path: '/more',
        // path: '/detail/:id',带参数
        name: 'more',
        component: More
    },
    {
        path: '/location',
        // path: '/detail/:id',带参数
        name: 'location',
        component: Location
    },
    {
        path: '/goodscar',
        // path: '/detail/:id',带参数
        name: 'goodscar',
        component: Goodscar
    },
    {
        path: '/loging',
        // path: '/detail/:id',带参数
        name: 'loging',
        component: Loging
    },

    // 重定向
    {
        path: '/',
        redirect: '/main/home'
    }

]
// 重置登录，先从token里面看是否是登录状态
// router.beforeEach((to, from, next) => {
//     let token = localStorage.getItem('token')
//     if (to.meta.requireAuth) {
//         if (token) {
//             next()
//         } else {
//             next({
//                 path: '/loging',
//                 query: { redirect: to.fullPath }
//             })
//         }
//     } else {
//         next()
//     }
// })

const router = new VueRouter({
    routes
})

export default router
