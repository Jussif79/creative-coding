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
      path: '/woche1',
      name: 'woche1',
      component: () => import('../views/Woche1View.vue'),
    },
    {
      path: '/woche2',
      name: 'woche2',
      component: () => import('../views/Woche2View.vue'),
    },
    {
      path: '/woche3',
      name: 'woche3',
      component: () => import('../views/Woche3View.vue'),
    },
    {
      path: '/woche4',
      name: 'woche4',
      component: () => import('../views/Woche4View.vue'),
    },
    {
      path: '/woche6',
      name: 'woche6',
      component: () => import('../views/Woche6View.vue'),
    },
    {
      path: '/woche7',
      name: 'woche7',
      component: () => import('../views/Woche7View.vue'),
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
    {
      path: '/woche2/shapes',
      name: 'Shapes',
      component: () => import('../components/woche2/Shapes.vue'),
    },
    {
      path: '/woche2/agent',
      name: 'Agent',
      component: () => import('../components/woche2/Agent.vue'),
    },
    {
      path: '/woche2/abstract-algorithm',
      name: 'AbstractAlgorithm',
      component: () => import('../components/woche2/AbstractAlgorithm.vue'),
    },
    {
      path: '/woche3/l-system',
      name: 'L-System',
      component: () => import('../components/woche3/L-System.vue'),
    },
    {
      path: '/woche4/markov-chain',
      name: 'MarkovChain',
      component: () => import('../components/woche4/MarkovChain.vue'),
    },
    {
      path: '/woche6/game-of-life',
      name: 'GameOfLife',
      component: () => import('../components/woche6/GameOfLife.vue'),
    },
    {
      path: '/woche6/101',
      name: '101',
      component: () => import('../components/woche6/101.vue'),
    },
    {
      path: '/woche7/pointclouds',
      name: 'PointClouds',
      component: () => import('../components/woche7/PointClouds.vue'),
    },
  ],
})

export default router
