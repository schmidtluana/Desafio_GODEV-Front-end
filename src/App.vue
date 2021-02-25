<template>
  <div id="app">
    <div id="nav">
      <router-link to="/cadastro_pessoas" id="link">Cadastro Pessoas</router-link> 
      <router-link to="/cadastro_salas" id="link">Cadastro Salas</router-link>
      <router-link to="/cadastro_espaco" id="link">Cadastro Espaço Café</router-link> 
      <router-link to="/consulta" id="link">Consulta</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav{
  display:flex;
  justify-content: center;
  margin-right: 27%;

}
#link{
  padding: 10px;
  margin: 6px 0px -20px -2px;
}



</style>
