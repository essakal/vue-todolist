import { createRouter, createWebHistory } from "vue-router";
import TodoView from "@/views/TodoView";

const routes = [
  {
    name: "TodoView",
    path: "/",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
