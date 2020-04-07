import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import File from '@/views/File'
import Blogger from '@/views/Blogger'
import Blog from '@/views/Blog'
import Note from '@/views/Note'


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
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/note',
            name: 'note',
            component: Note
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
