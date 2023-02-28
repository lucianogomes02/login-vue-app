<template>
  <main class="container__cadastro">
    <Cabecalho></Cabecalho>
    <body class="cadastro">
      <form class="formulario__cadastro">
        <div class="informacoes__do__usuario">
          <input class="nome" type="text" />
          <input class="sobrenome" type="text" />
          <input class="email" type="email" />
          <input class="cpf" type="text" />
          <input class="pis" type="text" />
          <input class="senha" type="password" />
        </div>
        <div class="endereco__do__usuario">
          <input class="cep" type="text" />
          <input class="logradouro" type="text" />
          <input class="numero" type="text" />
          <input class="complemento" type="text" />
          <input class="municipio" type="text" />
          <input class="estado" type="text" />
          <input class="pais" type="text" />
        </div>
      </form>
    </body>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cabecalho from "../components/Cabecalho.vue";

export default defineComponent({
  name: "CadastroView",
  components: { Cabecalho },
});
</script>

<style scoped>
.cadastro {
  height: 0;
  width: 0;
}

.container__cadastro {
  background: #8fddf5;
  width: 120rem;
  height: 61rem;
  margin: -8px;
}

input {
  text-align: center;
  margin-bottom: 1rem;
  width: 20rem;
  height: 2rem;
  border-radius: 41px;
  border: none;
  outline: none;
}
</style>
