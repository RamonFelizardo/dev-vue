// ./routes.js
import Login from "./components/login/Login.vue";
import ListTaskgroup from "./components/taskgroup/list-taskgroup/ListTaskgroup.vue";
import ShowTaskgroup from "./components/taskgroup/show-taskgroup/ShowTaskgroup.vue";
import CriarTaskgroup from "./components/taskgroup/criar-taskgroup/CriarTaskgroup.vue";
import DeletarTaskgroup from "./components/taskgroup/deletar-taskgroup/DeletarTaskgroup.vue";
export const routes = [
  {
    name: "login",
    path: "/login",
    component: Login
  },
  {
    name: "listTaskgroup",
    path: "/taskgroup/list",
    component: ListTaskgroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "showTaskgroup",
    path: "/taskgroup/show/:id",
    component: ShowTaskgroup,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  { path: "*", component: Login },
  {
    name: "criar_tarefa",
    path: "/taskgroup/criar",
    component: CriarTaskgroup,
    meta: {
      requiresAuth: true
    }
  },

  {
    name: "deletarTaskgroup",
    path: "/taskgroup/deletar/:id",
    component: DeletarTaskgroup,
    props: true,
    meta: {
      requiresAuth: true
    }
  },

];
