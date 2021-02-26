import Vue from 'vue'
import VueRouter from 'vue-router'
import CadastroPessoas from '../views/Cadastro_pessoas.vue'
import CadastroSalas from '../views/Cadastro_salas.vue'
import CadastroCafe from '../views/Cadastro_espaco.vue'
import ConsultaSalas from '../views/Consulta_salas.vue'
import ConsultaPessoas from '../views/Consulta_pessoas.vue'
import ConsultaCafe from '../views/Consulta_cafe.vue'

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
    path: '/consulta_salas',
    name: 'ConsultaSalas',
    component: ConsultaSalas
  },
  {
    path: '/consulta_pessoas',
    name: 'ConsultaPessoas',
    component: ConsultaPessoas
  },
  {
    path: '/consulta_cafe',
    name: 'ConsultaCafe',
    component: ConsultaCafe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
