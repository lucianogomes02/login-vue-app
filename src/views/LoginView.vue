<template>
  <main class="paginaDeLogin">
    <div class="login">
      <h1>Entre na sua conta</h1>
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

      <h4>Entre na sua conta utilizando suas redes sociais</h4>

      <div class="loginComRedesSociais">
        <BotaoRedeSocial />
        <BotaoRedeSocial />
        <BotaoRedeSocial />
      </div>
    </div>
    <div class="novoAqui">
      <h1>Novo por aqui?</h1>
      <h4>Faça o seu cadastro aqui</h4>
      <BotaoPreto class="botaoCadastro" :tituloDoBotao="'Cadastre-se'" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BotaoPreto from "../components/BotaoPreto.vue";
import BotaoRedeSocial from "../components/BotaoRedeSocial.vue";

export default defineComponent({
  name: "LoginView",
  components: { BotaoPreto, BotaoRedeSocial },
  data() {},
});
</script>

<style scoped>
.paginaDeLogin {
  display: flex;
  margin: -8px;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;
  height: 100vh;
  background-color: #8fddf5;
}

.formularioLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
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

.loginComRedesSociais {
  display: flex;
}

.novoAqui {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 61rem;
  height: 100vh;
  background-color: #00a3ff;
}
</style>
