import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index')
    }]
  },
  {
    path: '/querylist',
    name: 'querylist',
    component: () => import('@/views/querylist/index'),
    meta: { title: 'querylist'}
  },
  {
    path: '/cityindex',
    name: 'cityindex',
    component: () => import('@/views/cityindex/index'),
    meta: { title: 'cityindex'}
  },
  {
    path: '/houseintroduce',
    name: 'houseintroduce',
    component: () => import('@/views/querylist/index'),
    meta: { title: 'querylist'}
  },

  {
    path: '/searchlist',
    name: 'searchlist',
    component: () => import('@/components/Searchlist/index'),
    meta: { title: 'searchlist'}
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail/index'),
    meta: { title: 'detail'},
    children: [
      {
        path: 'erji',
        name: 'erji',
        component: () => import('@/views/erji/index'),
        meta: { title: 'erji'}
      },
    ]
  },
  {
    path: '/myerji',
    name: 'myerji',
    component: () => import('@/views/erji/index'),
    meta: { title: 'myerji'}
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

