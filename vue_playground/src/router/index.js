import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import TodolistDetail from "../components/TodolistDetail.vue";

const routes = [
  {path: "/",name: "Main",component: Main,},
  {path: "/TodolistDetail",name: "TodolistDetail",component: TodolistDetail,},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;