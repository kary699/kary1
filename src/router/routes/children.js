const Index = () => import('@/views/Index/Index.vue')
const Work = () => import('@/views/Work/Work.vue')
export default [
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
]