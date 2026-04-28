import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import BusinessPage from '../views/BusinessPage.vue'
import ResourcesPage from '../views/ResourcesPage.vue'
import TestimonialsPage from '../views/TestimonialsPage.vue'
import BusinessCreatePage from '../views/BusinessCreatePage.vue'
import DistributorTestimonialsPage from '../views/DistributorTestimonialsPage.vue'
import StrengthenBusinessPage from '../views/StrengthenBusinessPage.vue'
import EventsPage from '../views/EventsPage.vue'
import RecognitionsPage from '../views/RecognitionsPage.vue'
import BusinessCampaignsPage from '../views/BusinessCampaignsPage.vue'

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
    {
      path: '/negocio/crear-mi-negocio',
      name: 'business.create',
      component: BusinessCreatePage,
      meta: { title: 'Crear mi negocio • TBN Living' },
    },
    {
      path: '/negocio/testimonios-distribuidores',
      name: 'business.distributorTestimonials',
      component: DistributorTestimonialsPage,
      meta: { title: 'Testimonios de distribuidores • TBN Living' },
    },
    { path: '/recursos', name: 'resources', component: ResourcesPage, meta: { title: 'Recursos • TBN Living' } },
    {
      path: '/recursos/fortalecer-mi-negocio',
      name: 'resources.strengthen',
      component: StrengthenBusinessPage,
      meta: { title: 'Fortalecer mi negocio • TBN Living' },
    },
    {
      path: '/recursos/eventos',
      name: 'resources.events',
      component: EventsPage,
      meta: { title: 'Eventos • TBN Living' },
    },
    {
      path: '/recursos/reconocimientos',
      name: 'resources.recognitions',
      component: RecognitionsPage,
      meta: { title: 'Reconocimientos • TBN Living' },
    },
    {
      path: '/recursos/campanas-e-incentivos',
      name: 'resources.campaigns',
      component: BusinessCampaignsPage,
      meta: { title: 'Campañas e incentivos • TBN Living' },
    },
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

