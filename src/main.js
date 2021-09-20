import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCODHhpDEhMhk7ryXa5dedTgpJfky6oWwM",
    authDomain: "ideal-fd71f.firebaseapp.com",
    projectId: "ideal-fd71f",
    storageBucket: "ideal-fd71f.appspot.com",
    messagingSenderId: "605617409648",
    appId: "1:605617409648:web:dec3fc5a767d33160aaeb5",
    measurementId: "G-MSC207V7S9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createApp(App).use(store).use(router).mount('#app')
