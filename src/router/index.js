import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from "../views/Post.vue"

import Login from "../views/Login.vue"

import Entrance from "../views/Entrance.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/entrance",
    name: "Entrance",
    component: Entrance
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
