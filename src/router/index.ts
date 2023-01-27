import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Cadastro from "../views/CadastroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: Cadastro,
    },
  ],
});

export default router;
