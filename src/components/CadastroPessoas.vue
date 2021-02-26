<template>
  <body>
    <div>
      <h1 id="titulo">Cadastro de Pessoas</h1>
      <p id="subtitulo">Complete suas informações</p>
      <br />
    </div>


	<div id="caixa">	
    <div class="campo">
      <label id="nomes" for="nome"><strong>Nome</strong></label>
      <input type="text" nome="nome" id="nome" required v-model="nome" />
    </div>
    <div class="campo">
      <label id="nomes" for="sobrenome"><strong>Sobrenome</strong></label>
      <input
        type="text"
        nome="sobrenome"
        id="sobrenome"
        required
        v-model="sobrenome"
      />
    </div>
    <button class="botao" @click="salvar">Concluído</button>
    </div>	 
 
     <div id="modal-promocao" class="modal-container" v-if="clicado">
    <div class="modal">
          <form>
        <h2>Cadastrado com sucesso!</h2>
      </form>
    </div>
  </div>

    <div id="modal-promocao" class="modal-container" v-if="verificarCampos">
    <div class="modal">
       <form>
        <h2>É necessário preencher todos os campos</h2>
      </form>
    </div>
  </div>
    
  </body>
</template>

<script>
const axios = require("axios");
export default {
  data: function () {
    return {
      nome: "",
      sobrenome: "",
      clicado: false,
      verificarCampos: false,
      };
  },
  methods: {
    salvar: function () {
      var contador = 0;
      if (contador == 0){
        if (
          this.nome == "" &&
          this.sobrenome == "" 
        ) {
          this.verificarCampos = true;
      }
      if (
        this.nome == "" ||
        this.sobrenome == "" 
      ) {
        this.verificarCampos = true;
      }
      if (
        this.nome != "" &&
        this.sobrenome != "" 
      ) {     
      axios
        .post("http://localhost:54732/api/Pessoa", {
          nome: this.nome,
          sobrenome: this.sobrenome,
        })
        .then((resp) => {
          console.log(resp.data)
          this.clicado = true;
          });
      this.reloadPage();
    } //axios
    }
    },
    reloadPage: function () {
      setTimeout(function () {
        location.reload();
      }, 3000)
    }
  }  
}
</script>

<style scoped>
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

/* Elementos de classe "campo" das tags <input> com atributo text e email, da tag <select> e da tag <textarea>*/
.campo input[type="text"],
.campo input[type="number"],
.campo select,
.campo textarea {
  padding: 0.2em;
  border: 1px solid #59429d;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  
  
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
  margin-top: 6%;
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
.modal-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: rgb(182, 143, 233);
  width: 30%;
  min-width: 300px;
  padding: 40px;
  border: 10px solid ;
  box-shadow: 0 0 0 10px rgb(182, 143, 233);
  position: relative;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

</style>