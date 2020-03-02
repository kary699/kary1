import App from '@/App.vue'
// 404
import Empty from '@/views/Empty.vue'
// 登录、注册
import Sign from '@/views/Sign/Sign.vue'

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
        path: '/sign',
        name: 'sign',
        component: Sign
    },
    {
        path: '*',
        name: '404',
        component: Empty
    }
]