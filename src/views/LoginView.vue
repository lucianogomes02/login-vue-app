<template>
  <main class="paginaDeLogin">
    <div class="login">
      <form class="formularioLogin">
        <input
          class="campoDoLogin"
          type="text"
          placeholder="Digite seu E-Mail, CPF ou PIS de cadastro"
        />
        <input
          class="campoDaSenha"
          type="password"
          placeholder="Digite sua Senha"
        />
      </form>
      <BotaoPreto class="botaoEntrar" :tituloDoBotao="'Entrar'" />
    </div>
    <div class="novoAqui"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BotaoPreto from "../components/BotaoPreto.vue";

export default defineComponent({
  name: "LoginView",
  components: { BotaoPreto },
  data() {},
});
</script>

<style scoped>
.paginaDeLogin {
  display: flex;
  margin: -8px;
}

.campoDoLogin,
.campoDaSenha {
  text-align: center;
  margin-bottom: 1rem;
  width: 20rem;
  height: 2rem;
  border-radius: 41px;
  border: none;
}

.formularioLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;
  height: 100vh;
  background-color: #20bef0;
  opacity: 38%;
}

.novoAqui {
  width: 61rem;
  height: 100vh;
  background-color: #00a3ff;
}
</style>
