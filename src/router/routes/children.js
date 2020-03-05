const Index = () => import('@/views/Index/Index.vue')
const Check = () => import('@/views/Check/Check.vue')
const File = () => import('@/views/File/File.vue')

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
        path: '/file',
        name: 'file',
        component: File
    },
]