<template>
  <main class="container">
    <div class="login">
      <BotaoPreto :classeDoBotao="'botaoLogin'" :tituloDoBotao="'Entrar'" />
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
.container {
  display: flex;
  margin: -8px;
}

.login {
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
