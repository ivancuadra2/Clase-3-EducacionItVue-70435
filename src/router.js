
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import Login from './pages/Login.vue'
import AboutView from './pages/About.vue'
import UsuariosView from './pages/Usuarios.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/usuarios', component: UsuariosView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router