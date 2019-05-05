import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Class from '@/views/Class'
import File from '@/views/File'
import Blogger from '@/views/Blogger'
import Blog from '@/views/Blog'

import AdminBlog from '@/views/Admin/Blog'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/class',
            name: 'class',
            component: Class
        },
        {
            path: '/file',
            name: 'file',
            component: File
        },
        {
            path: '/blogger',
            name: 'blogger',
            component: Blogger
        },
        {
            path: '/blog/:id',
            name: 'blog',
            component: Blog
        },
        {
            path: '/admin/blog',
            name: 'adminblog',
            component: AdminBlog
        }
    ]
})
