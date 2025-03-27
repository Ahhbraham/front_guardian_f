import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '@/views/LandingPage.vue';
import HomePage from '@/views/HomePage.vue';

import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import RolePage from '@/views/RolePage.vue';








const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'LandingPage',
      component: LandingPage,
      // meta: { hideNavbar: true } //Hides the navbar in Landing
    
    },

      {
        path:'/LoginPage',
        name:'LoginPage',
        component: LoginPage,
      
      },

      {
        path:'/RegisterPage',
        name:'RegisterPage',
        component: RegisterPage,
      },
      {
        path:'/RolePage',
        name:'RolePage',
        component: RolePage,
      },
      {
        path:'/HomePage',
        name:'HomePage',
        component: HomePage,
      },

      
  ],
});

export default router;