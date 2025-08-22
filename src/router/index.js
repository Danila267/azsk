import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '@/views/Categories.vue'
import Contacts from '@/views/Contacts.vue'
import Catalog from '@/views/Catalog.vue'
import SinglePage from '@/views/SinglePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/item',
    name: 'SinglePage',
    component: SinglePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
