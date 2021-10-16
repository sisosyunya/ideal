import { createRouter, createWebHistory } from 'vue-router'
import Entrance from "../views/Entrance.vue"
import Home from '../views/Home.vue'
import Post from "../views/Post.vue"
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Chat from "../views/Chat.vue"
// import ChatWindow from "../component/ChatWindow.vue"
import NewChatForm from "../views/NewChatForm.vue"

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path:'/chat',
    name:'Chat',
    component: Chat
  },
  {
    path:'/newchatform',
    name:'NewChatForm',
    component:NewChatForm
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
