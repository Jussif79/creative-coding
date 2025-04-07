import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/woche1/sketch1',
      name: 'sketch1',
      component: () => import('../components/woche1/Sketch1.vue'),
    },
    {
      path: '/woche1/sketch2',
      name: 'sketch2',
      component: () => import('../components/woche1/Sketch2.vue'),
    },
    {
      path: '/woche1/sketch3',
      name: 'sketch3',
      component: () => import('../components/woche1/Sketch3.vue'),
    },
    {
      path: '/woche1/sketch4',
      name: 'sketch4',
      component: () => import('../components/woche1/Sketch4.vue'),
    },
    {
      path: '/woche1/image-filter',
      name: 'sketch5',
      component: () => import('../components/woche1/ImageFilter.vue'),
    },
    {
      path: '/woche1/sort-image',
      name: 'SortImage',
      component: () => import('../components/woche1/SortImage.vue'),
    },
    {
      path: '/woche1/resize-image',
      name: 'ResizeImage',
      component: () => import('../components/woche1/ResizeImage.vue'),
    },
    {
      path: '/woche1/two-images',
      name: 'TwoImages',
      component: () => import('../components/woche1/TwoImages.vue'),
    },
  ],
})

export default router
