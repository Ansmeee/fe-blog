import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index'
import Home from '../views/Home'
import Blogger from '../views/Blogger'
import Blog from '../views/Blog'
import Note from '../views/Note'


import AdminBlog from '@/views/Admin/Blog'
import AdminEdit from '@/views/Admin/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Index,
      children: [
        {
          path: '',
          name: 'home.home',
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
      ]
    },
    {
      path: '/admin/blog',
      name: 'adminblog',
      component: AdminBlog
    },
    {
      path: '/admin/edit',
      name: 'admin.edit',
      component: AdminEdit
    },
  ]
})
