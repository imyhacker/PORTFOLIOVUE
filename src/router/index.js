import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/Skill.vue'),
  },
  {
    path: '/achievement',
    name: 'Achievement',
    component: () => import('../views/Achievement.vue'),
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue'),
  },
  {
    path: '/exp',
    name: 'Exp',
    component: () => import('../views/Exp.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
