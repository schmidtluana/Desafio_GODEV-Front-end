<h1 align="center">Gerenciador de treinamento - Programa_GODEV</h1>

<p align="center">Desafio de programação que aborda o gerenciamento de um treinamento de uma empresa de TI</p>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executrar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-instruções-utilização">Instruções Utilização</a> • 
 <a href="#-autora">Autora</a>
</p>


## 💻 Sobre o projeto

O projeto foi desenvolvido com o objetivo de gerenciar um programa de treinamento de uma empresa de TI. Assim, o projeto demostra o acesso à telas de cadastro e consulta de pessoas, espaços de café e também de salas. No Front-end do projeto, foi utilizada a linguagem de programação JavaScript, juntamente com sua biblioteca VUE.js. Já na parte do Back-end a linguagem de programação C# - ASP.NET foi escolhida. Para a persistência de dados do projeto foi utilizado o banco de dados SQL Server Management Studio.

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:

1. Front-end - Desafio_GODEV-Front-end  <br>
2. Back-end - Desafio_GODEV-Back-end - https://github.com/schmidtluana/Desafio_GODEV-Back-end.git <br>
3. Teste Unitário - Teste_Unitario - https://github.com/schmidtluana/Teste_Unitario.git <br>

💡 Juntamente com a pasta do Front-end estará o arquivo "Script dados" onde você encontrará o script do Banco de Dados SQL Server <br>
💡Tanto o Front-end quanto o Back-end precisam que o Banco de dados esteja sendo executado para funcionar.

### 📌 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Microsoft SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads). 
Além disto é importante ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e [VStudio](https://visualstudio.microsoft.com/pt-br/vs/)

### 🎲 Rodando o Banco de Dados (SQL Server Management Studio)

```bash
# Copie o script do banco de dados 
https://github.com/schmidtluana/Desafio_GODEV-Front-end/blob/master/Script%20dados

# Abra o SQL Server
# Nova Consulta
# Cole o script do banco e clique em executar
# Pronto, seu banco de dados foi criado

# Mantenha o SQL Server aberto
```

### 🖥️ Rodando o Back-End (servidor)

- Editor usado para a aplicação foi o [VisualStudio](https://visualstudio.microsoft.com/pt-br/vs/)

```bash
# Clone este repositório
$ git clone https://github.com/schmidtluana/Desafio_GODEV-Back-end.git

# Abra o projeto no VStudio

# Instale as dependências nos Pacotes Nuget
# Entity.Framework
# Microsoft.AspNet.WebAPI.Cors

# Importe o banco de dados na pasta Models
# Na pasta Models clique em Adicionar - Novo item - Dados - ADO.NET Entity DataModel
# Carregue o banco de dados que você gerou anteriormente 'programa_GODEV'
# Foi gerado um arquivo do tipo 'Model1.edmx'

# Execute a aplicação no botão superior
$ IIS Express 

# O servidor inciará na porta:54732 - acesse <http://localhost:54732/>
```

### 🧭 Rodando a aplicação web (Front-end)
```bash

# Clone este repositório
$ git clone https://github.com/schmidtluana/Desafio_GODEV-Front-end.git

# Vá para a pasta da aplicação Front End
# Abra a pasta no VSCode

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run serve

# A aplicação será aberta na porta:8080 - acesse http://localhost:8080

```
### ⚙️ Rodando os Testes Unitários 

Neste projeto foram usados:

- Node js
- Mocha (lib que executará os testes, deve ser instalada globalmente)
- Should (Para fazer assesções)

Instale o Node js na sua máquina, caso ainda não tenha acesse o site do [Node.js](https://nodejs.org/en/)

Após clonar este repisitório https://github.com/schmidtluana/Teste_Unitario.git siga os passos abaixo para que funcione:

Instale o Mocha globalmente na sua máquina para poder rodar os testes
```
npm i -g mocha istanbul
```
Agora você precisa estar dentro da sua pasta, abra o terminal e instale as dependências do projeto (o Should já está como dependência)
```
npm install
```
Para rodar os testes basta rodar o seguinte comando na pasta
```
npm run test
```
---

## 📃 Instruções de utilização

Seguir a ordem abaixo da execusão dos programas:
- Criar Banco de Dados (com o script)<br>
- Abrir VStudio com Back-end (Depurar o projeto IIS Express)<br>
- Abrir o VSCode com o Front-end (abrir o localhost http://localhost:8080/ no navegador web de sua preferefência)

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [JavaScript](https://www.javascript.com/)
- [Vue.js](https://vuejs.org/)
- [Axios](https://github.com/axios/axios)
- [Microsoft SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
- [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/)

---

## 🦸 Autora
 <h3> Luana Caroline Schmidt </h3>
 [Entre em contato!](https://www.linkedin.com/in/luana-schmidt-5103551b9/)
 
---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---


