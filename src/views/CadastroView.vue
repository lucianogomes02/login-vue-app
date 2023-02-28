<template>
  <main class="container__cadastro">
    <Cabecalho></Cabecalho>
    <section class="cadastro">
      <form class="formulario__cadastro">
        <h2 class="titulo__cadastro">Preencha suas informações de cadastro</h2>
        <div class="informacoes__do__usuario">
          <input class="nome" type="text" placeholder="Nome"/>
          <input class="sobrenome" type="text" placeholder="Sobrenome"/>
          <input class="email" type="email" placeholder="E-mail"/>
          <input class="cpf" type="text" placeholder="CPF"/>
          <input class="pis" type="text" placeholder="PIS"/>
          <input class="senha" type="password" placeholder="Senha"/>
        </div>
        <div class="endereco__do__usuario">
          <input class="cep" type="text" placeholder="CEP"/>
          <input class="logradouro" type="text" placeholder="Logradouro (Rua, Av, Travessa)"/>
          <input class="numero" type="text" placeholder="Número"/>
          <input class="complemento" type="text" placeholder="Complemento"/>
          <input class="municipio" type="text" placeholder="Município"/>
          <input class="estado" type="text" placeholder="Estado"/>
          <input class="pais" type="text" placeholder="País"/>
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
}

.informacoes__do__usuario, .endereco__do__usuario {
  margin-bottom: 3rem;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
