import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from"./firebase/firebaseInit"
import { createPinia } from 'pinia'
import"./assets/common.css"
import"./assets/font.css"


const pinia = createPinia()
const app = initializeApp(firebaseConfig);
createApp(App).use(pinia)
createApp(App).use(router).mount('#app');
