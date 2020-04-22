import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index'

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
      component: Index
    },
    {
      path: '/blog',
      name: 'home.blog',
      component: Index
    },
    {
      path: '/note',
      name: 'home.note',
      component: Index
    },
    {
      path: '/photo',
      name: 'home.photo',
      component: Index
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
