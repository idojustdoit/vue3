import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import {firebaseConfig } from"./firebase/firebaseInit"

createApp(App).use(router).mount('#app');
const app = initializeApp(firebaseConfig);