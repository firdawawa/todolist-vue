import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotesView from '../views/NotesView.vue';
import PhoneView from '@/views/PhoneView.vue';
import PhoneCreate from '@/views/PhoneCreate.vue';
import PhoneEdit from '@/views/PhoneEdit.vue';
import TodoView from '@/views/TodoView.vue';
import BudgetView from '@/views/BudgetView.vue';
import BudgetCreate from '@/views/BudgetCreate.vue';
import BudgetEdit from '@/views/BudgetEdit.vue';
import NotesCreate from '@/views/NotesCreate.vue';
import NotesEdit from '@/views/NotesEdit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView,
    },
    {
      path: '/phone',
      name: 'phone',
      component: PhoneView,
    },
    {
      path: '/phone/create',
      name: 'phoneCreate',
      component: PhoneCreate,
    },
    {
      path: '/phone/:id/edit',
      name: 'phoneEdit',
      component: PhoneEdit,
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
    },
    {
      path: '/notes/create',
      name: 'Create Notes',
      component: NotesCreate,
    },
    {
      path: '/notes/:id/edit',
      name: 'Edit Notes',
      component: NotesEdit,
    },
    {
      path: '/budget',
      name: 'budget',
      component: BudgetView,
    },
    {
      path: '/budget/create',
      name: 'budgetCreate',
      component: BudgetCreate,
    },
    {
      path: '/budget/:id/edit',
      name: 'budgetEdit',
      component: BudgetEdit,
    },
  ],
});

export default router;
