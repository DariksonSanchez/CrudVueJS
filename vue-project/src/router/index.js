import { createRouter, createWebHistory } from 'vue-router'
import ComicsViews from '@/views/ComicsViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: ComicsViews
    },
    {
      path: '/nuevoComic',
      name: 'nuevoComic',
      component: () => import('../views/NewComic.vue')
    },
    {
      path: '/EditarComic/:id',
      name: 'EditarComic',
      component: () => import('../views/EditarComic.vue') 
    }
  ]
})

export default router
