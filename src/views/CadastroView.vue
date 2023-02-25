<template>
  <main class="containerCadastro">
    <Cabecalho></Cabecalho>
    <body class="cadastro">
      <form class="formularioCadastro">
        <div class="informacoesDoUsuario">
          <input class="nome" type="text" />
          <input class="sobrenome" type="text" />
          <input class="email" type="email" />
          <input class="cpf" type="text" />
          <input class="pis" type="text" />
          <input class="senha" type="password" />
        </div>
        <div class="enderecoDoUsuario">
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
  background: #8fddf5;
  width: auto;
  height: 95.2vh;
  margin: -8px;
}
</style>
