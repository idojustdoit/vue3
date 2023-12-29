import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from"./firebase/firebaseInit"
import"./assets/common.css"
import"./assets/font.css"




createApp(App).use(router).mount('#app');
const app = initializeApp(firebaseConfig);