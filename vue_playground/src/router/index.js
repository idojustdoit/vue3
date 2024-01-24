import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import TodolistDetail from "../components/TodolistDetail.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

import menuBar from "../sub/MenuBar.vue"

const routes = [
  {path: "/",name: "main",components:{default:Main, menuBar:menuBar}},
  {path: "/login",name: "login",components:{default:Login}},
  {path: "/signup",name: "signup",components:{default:Signup}},
  {path: "/TodolistDetail",name: "TodolistDetail",components:{default:TodolistDetail, sidebar:menuBar} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;