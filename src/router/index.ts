import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPersonView from '../views/AddPersonView.vue'
import EditPersonDialog from '../components/EditPersonDialog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/edit-person',
    name: 'edit-person',
    component: EditPersonDialog
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-person',
    name: 'add-person',
    component: AddPersonView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
