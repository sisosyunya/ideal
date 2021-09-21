import { createRouter, createWebHistory } from 'vue-router'
import Entrance from "../views/Entrance.vue"
import Home from '../views/Home.vue'
import Post from "../views/Post.vue"



const routes = [
  {
    path: "/",
    name: "Entrance",
    component: Entrance
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
