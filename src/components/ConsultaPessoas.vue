<template>
    <body>
        <div id="t1">
            <h1>Consulta - Pessoas</h1>
        </div>
        <table border="1">
            <thead>
                <tr>
                    <th>Sala Etapa 1</th>
                    <th>Sala Etapa 2</th>
                    <th>Espaço Café Etapa 1</th>
                    <th>Espaço Café Etapa 2</th>
                </tr>
            </thead>
        </table>

        <div id="sel">
        <label for="">Selecione uma pessoa: </label> <br>
        <select name="" id="" >
            <option value=""></option>
        </select>
        </div>
    </body>
</template>

<script>
export default {
    
}
</script>

<style>
#t1{
    margin-left: 6%;
    color: rgb(74, 8, 100);
}
table {
  border-collapse: collapse;
  margin-left: 28%;
  margin-top: 5%;
  padding: 1em;

  
}
th{
    width: 120px;
    height: 10px;
}
select{
    width: 200px;
}
#sel{
    margin-top: -4%;
}

</style>