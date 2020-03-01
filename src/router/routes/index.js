import App from '@/App.vue'
// 404
import Empty from '@/views/Empty.vue'
// 登录
import SignIn from '@/views/SignIn.vue'
// 注册
import SignUp from '@/views/SignUp.vue'

// 路由
import Index from './children'

export default [
    {
        path: '/',
        name: 'app',
        component: App,
        redirect: '/index',
        children: Index
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '*',
        name: '404',
        component: Empty
    }
]