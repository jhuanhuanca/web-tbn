import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import BusinessPage from '../views/BusinessPage.vue'
import ResourcesPage from '../views/ResourcesPage.vue'
import TestimonialsPage from '../views/TestimonialsPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { title: 'TBN Living' } },
    { path: '/productos', name: 'products', component: ProductsPage, meta: { title: 'Productos • TBN Living' } },
    { path: '/negocio', name: 'business', component: BusinessPage, meta: { title: 'Negocio • TBN Living' } },
    { path: '/recursos', name: 'resources', component: ResourcesPage, meta: { title: 'Recursos • TBN Living' } },
    {
      path: '/testimonios',
      name: 'testimonials',
      component: TestimonialsPage,
      meta: { title: 'Testimonios • TBN Living' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  if (typeof to.meta?.title === 'string') document.title = to.meta.title
})

