import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '@/views/PageNotFound.vue'
import VHome from '@/views/VHome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: VHome },

    { path: '/404', component: PageNotFound },

    {
      path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
      redirect: '/404'
    }
  ]
})

export default router
