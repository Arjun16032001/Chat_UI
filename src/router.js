import { createRouter, createWebHistory } from 'vue-router'

import Layout from './components/Layout.vue'; 
import Login from './components/pages/login/Login.vue';
import Faq_cre from './components/pages/faq_bot/Faq_cre.vue';


const routes = [
  { path: '/', component: Layout },
  { path: '/login', component: Login },
  { path: '/faq', component: Faq_cre },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;