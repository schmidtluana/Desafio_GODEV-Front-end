<template>
  <body>
    <div>
      <h1 id="titulo">Cadastro das Salas</h1>
      <p id="subtitulo">Complete suas informações</p>
      <br />
    </div>

  
      <div class="campo">
        <label for="nome"><strong>Nome</strong></label>
        <input type="text" nome="nome" id="nome" required v-model="nome" />
      </div>
      <div class="campo">
        <label for="lotacao"><strong>Lotação</strong></label>
        <input
          type="number"
          nome="lotacao"
          id="lotacao"
          required
          v-model="lotacao"
        />
        <button class="botao" @click="salvar">Concluído</button>
      </div>
    
  </body>
</template>

<script>
const axios = require("axios");
export default {
  data: function () {
    return {
      nome: "",
      lotacao: 0,
    };
  },
  methods: {
    salvar: function () {
      axios
        .post("http://localhost:54732/api/Sala", {
          nome: this.nome,
          lotacao: this.lotacao,
        })
        .then((resp) => console.log(resp.data));
      this.reloadPage();
    },
    reloadPage: function () {
      setTimeout(function () {
        location.reload();
      }, 5000);
    },
  },
};
</script>

<style>
/* Todos os elementos da página */
* {
  margin: 0;
  padding: 0;
}

/* Elementos com o ID "titulo" */
#titulo {
  font-family: sans-serif;
  color: #380b61;
  margin-left: 2%;
}

/* Elementos com o ID "subtitulo" */
#subtitulo {
  font-family: sans-serif;
  color: #380b61;
  margin-left: 10%;
}

#check {
  display: inline-block;
}

/* Elementos de tag <fieldset>*/
fieldset {
  border: 0;
}

/* Elemento de tag <body> */
body {
  background-color: #f0f8ff;
  font-family: sans-serif;
  font-size: 1em;
  color: #59429d;
  margin-left: 20%;
  margin-top: 5%;
  justify-content: center;
}

/* Elementos de tags <body>, <input>, <Select>, <textarea> e <button> */
input,
select,
textarea,
button {
  font-family: sans-serif;
  font-size: 1em;
  color: #59429d;
  border-radius: 5px;
  
}

/* Elementos de classe "grupo" nos estados das pseudoclasses "before" e "after" */
.grupo:before,
.grupo:after {
  display: table;
}

/* Elementos de classe "grupo" no estado da pseudoclasse "after" */
.grupo:after {
  clear: both;
}

/* Elementos de classe "campo" */
.campo {
  margin-bottom: 1em;
  
}

/* Elementos de classe "campo" de tag <label> */
.campo label {
  margin-bottom: 0.2em;
  color: #59429d;
  display: block;
}

/* Elementos de classe "campo" ou "grupo" de tag <fieldset> */
fieldset.grupo .campo {
  float: left;
  margin-right: 1em;
}

/* Elementos de classe "campo" das tags <input> com atributo text e email, da tag <select> e da tag <textarea>*/
.campo input[type="text"],
.campo input[type="number"],
.campo select,
.campo textarea {
  padding: 0.2em;
  border: 1px solid #59429d;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: block;
}

/* Elementos de classe "campo" de tag <select> e <option>*/
.campo select option {
  padding-right: 1em;
}

/* Elemento de classe "campo" com tag <input>, <select> e <textarea> tocas com estado da pseudoclasse "focus"*/
.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  background: #e0e0f8;
}

/* Elemento de classe "botao" */
.botao {
  font-size: 1.2em;
  background: #59429d;
  border: 0;
  margin-bottom: 1em;
  color: #ffffff;
  padding: 0.2em 0.6em;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  margin-top: 5%;
}

/* Elemento de classe "botao" com o estado da pseudoclasse "hover" */
.botao:hover {
  background: #ccbbff;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
  text-shadow: none;
}

/* Elementos de classe botão e de tag <select> */
.botao,
select {
  cursor: pointer;
}
fieldset {
  width: 30px;
  height: 40px;
  color: #59429d;
}
/** .container {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 300px;
  border: black solid 1px;
  border-radius: 10px;
  justify-content: center;
}
*/
</style>