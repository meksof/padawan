import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Search from '../views/Search'
import ItemsList from '@/components/Item/ItemsList'
import CreateSale from '@/components/Sale/CreateSale'
import CreateItem from '@/components/Item/CreateItem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/items/:id',
    name: 'items',
    component: ItemsList
  },
  {
    path: '/sale/create',
    name: 'create-sale',
    component: CreateSale
  },
  {
    path: '/items/:id/create',
    name: 'create-item',
    component: CreateItem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
