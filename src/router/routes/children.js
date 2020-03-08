const Index = () => import('@/views/Index/Index.vue')
const Check = () => import('@/views/Check/Check.vue')
const Prospace = () => import('@/views/Prospace/Prospace.vue')
export default [
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/check',
        name: 'check',
        component: Check
    },
    {
        path: '/prospace',
        name: 'prospace',
        component: Prospace
    },
]