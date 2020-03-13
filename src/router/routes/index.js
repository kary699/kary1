import App from '@/views/App'
// 404
import Empty from '@/views/Empty'
// 登录、注册
import Sign from '@/views/Sign/Sign'

// 根路由
import Root from '@/views/Root'

// 子路由
import Index from './children'

export default [
    {
        path: '/',
        name: 'app',
        component: App,
        redirect: '/root',
        children: [
            {
                path: '/root',
                component: Root,
                redirect: '/index',
                children: Index
            }
        ]
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