import { createRouter, createWebHistory } from 'vue-router'

import Layout from './components/Layout.vue'; 
import Login from './components/pages/login/Login.vue';
import Faq_cre from './components/pages/faq_bot/Faq_cre.vue';
import Dash from './components/pages/dash/Dash.vue';


const routes = [
  { 
    path: '/login', 
    component: Login,
    name: 'Login' 
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'faq',
        name: 'Faq',
        component: Faq_cre,
      },
      {
        path: '',
        name: 'Dashboard',
        component: Dash,
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;