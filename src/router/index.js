import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ItemCreate from "../views/ItemCreate";
import ItemUpdate from "../views/ItemUpdate";
import ItemList from "../views/ItemList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/create',
    name: 'ItemCreate',
    component: ItemCreate
  },
  {
    path: '/item/update/:id',
    name: 'ItemUpdate',
    component: ItemUpdate
  },
  {
    path: '/itemList',
    name: 'ItemList',
    component: ItemList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
