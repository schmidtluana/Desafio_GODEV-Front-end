import Vue from 'vue'
import VueRouter from 'vue-router'
import CadastroPessoas from '../views/Cadastro_pessoas.vue'
import CadastroSalas from '../views/Cadastro_salas.vue'
import CadastroCafe from '../views/Cadastro_espaco.vue'
import Consulta from '../views/Consulta.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/cadastro_pessoas',
    name: 'Cadastro_pessoas',
    component: CadastroPessoas
  },
  {
    path: '/cadastro_salas',
    name: 'Cadastro_salas',
    component: CadastroSalas
  },
  {
    path: '/cadastro_espaco',
    name: 'Cadastro_espaco',
    component: CadastroCafe
  },
  {
    path: '/consulta',
    name: 'Consulta',
    component: Consulta
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
