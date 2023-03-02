<template>
  <form class="formulario__do__usuario">
    <h2 class="titulo__do__formulario">{{ tituloDoFormulario }}</h2>
    <div class="informacoes__do__usuario">
      <div class="informacao__do__usuario">
        <input id="nome" type="text" placeholder="Nome" />
        <label for="nome">Nome</label>
      </div>

      <div class="informacao__do__usuario">
        <input id="sobrenome" type="text" placeholder="Sobrenome" />
        <label for="sobrenome">Sobrenome</label>
      </div>

      <div class="informacao__do__usuario">
        <input id="email" type="email" placeholder="E-mail" />
        <label for="email">E-mail</label>
      </div>

      <div class="informacao__do__usuario">
        <input id="cpf" type="text" placeholder="CPF" />
        <label for="cpf">CPF</label>
      </div>

      <div class="informacao__do__usuario">
        <input id="pis" type="text" placeholder="PIS" />
        <label for="pis">PIS</label>
      </div>

      <div class="informacao__do__usuario">
        <input id="senha" type="password" placeholder="Senha" />
        <label for="senha">Senha</label>
      </div>
    </div>
    <div class="endereco__do__usuario">
      <div class="informacao__do__endereco">
        <input id="cep" type="text" placeholder="CEP" />
        <label for="cep">CEP</label>
      </div>

      <div class="informacao__do__endereco">
        <input
          id="logradouro"
          type="text"
          placeholder="Logradouro (Rua, Av, Travessa)"
        />
        <label for="logradouro">Logradouro</label>
      </div>

      <div class="informacao__do__endereco">
        <input id="numero" type="text" placeholder="Número" />
        <label for="numero">Número</label>
      </div>

      <div class="informacao__do__endereco">
        <input id="complemento" type="text" placeholder="Complemento" />
        <label for="complemento">Complemento</label>
      </div>

      <div class="informacao__do__endereco">
        <input id="municipio" type="text" placeholder="Município" />
        <label for="municipio">Município</label>
      </div>

      <div class="informacao__do__endereco">
        <input id="estado" type="text" placeholder="Estado" />
        <label for="estado">Estado</label>
      </div>

      <div class="informacao__do__endereco">
        <input id="pais" type="text" placeholder="País" />
        <label for="pais">País</label>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioDoUsuario",
  props: {
    tituloDoFormulario: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/assistant");

* {
  font-family: "Assistant", sans-serif;
  font-weight: 350;
}

.formulario__do__usuario {
  margin-left: 3rem;
  margin-top: 5rem;
}

.titulo__do__formulario {
  margin-left: 44rem;
  margin-bottom: 5rem;
}

.informacoes__do__usuario,
.endereco__do__usuario {
  margin-bottom: 3rem;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.informacao__do__usuario,
.informacao__do__endereco {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}

label {
  padding-left: 1.5rem;
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
