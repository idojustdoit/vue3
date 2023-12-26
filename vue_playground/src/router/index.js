import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import TodolistDetail from "../components/TodolistDetail.vue";

import menuBar from "../sub/MenuBar.vue"

const routes = [
  {path: "/",name: "Main",components:{default:Main, menuBar:menuBar}},
  {path: "/TodolistDetail",name: "TodolistDetail",components:{default:TodolistDetail, sidebar:menuBar} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;