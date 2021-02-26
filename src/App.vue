<template>
  <div id="app">
    <h1 id="title">Gerenciador do Treinamento</h1>
    <div id="nav">
      <router-link to="/cadastro_pessoas" id="link">Cadastro Pessoas</router-link>
      <router-link to="/cadastro_salas" id="link">Cadastro Salas</router-link>
      <router-link to="/cadastro_espaco" id="link">Cadastro Espaço Café</router-link>
      <router-link to="/consulta_cafe" id="link">Consulta Espaços de Café</router-link>
      <router-link to="/consulta_salas" id="link">Consulta Salas</router-link>
      <router-link to="/consulta_pessoas" id="link">Consulta Pessoas</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  display: flex;
  text-align: center;
}
#link {
  padding: 10px;
  margin: 6px 0px -20px -2px;
}
#title{
  text-align: center;
  margin-right: 20%;
}
</style>
