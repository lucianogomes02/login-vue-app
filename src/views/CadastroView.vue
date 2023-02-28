<template>
  <main class="container__cadastro">
    <Cabecalho></Cabecalho>
    <section class="cadastro">
      <form class="formulario__cadastro">
        <h2 class="titulo__cadastro">Preencha suas informações de cadastro</h2>
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
    </section>
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
@import url("https://fonts.cdnfonts.com/css/assistant");

* {
  font-family: "Assistant", sans-serif;
  font-weight: 350;
}

.container__cadastro {
  background: #8fddf5;
  width: 120rem;
  height: 61rem;
  margin: -8px;
}

.cadastro {
  width: 120rem;
  height: 50rem;

  display: flex;
  align-items: center;
}

.formulario__cadastro {
  margin-left: 3rem;
  margin-bottom: 10rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.informacoes__do__usuario {
  margin-bottom: 3rem;
}

.titulo__cadastro {
  margin-left: 44rem;
  margin-bottom: 5rem;
}

input {
  text-align: center;
  margin-bottom: 1rem;
  width: 20rem;
  height: 2rem;
  border-radius: 41px;
  border: none;
  outline: none;
  margin: 1rem;
}
</style>
