// src/router/routes.js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'pakaian', component: () => import('pages/ProductPage.vue') }, // Diubah ke 'pakaian'
      { path: 'kontak', component: () => import('pages/ContactPage.vue') }, // Diubah ke 'kontak'
      { path: 'item-detail/:id', component: () => import('pages/ProductDetailPage.vue'), props: true } // Diubah ke 'item-detail'
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes