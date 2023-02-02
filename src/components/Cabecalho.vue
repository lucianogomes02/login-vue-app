<template>
  <header class="cabecalho">
    <nav class="barraDeNavegacao">
      <h4 class="bemVindo">Bem-vindo, visitante</h4>
      <BotaoPreto
        class="botaoDeVoltar"
        :titulo-do-botao="'Voltar'"
      ></BotaoPreto>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BotaoPreto from "../components/BotaoPreto.vue";

export default defineComponent({
  name: "Cabecalho",
  components: { BotaoPreto },
});
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/assistant");

* {
  font-family: "Assistant", sans-serif;
  font-weight: 350;
}

.cabecalho {
  background: #00a3ff;
  width: auto;
  height: 7vh;
  margin: -8px;
}

.barraDeNavegacao {
  width: 100%;
  height: 4vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.bemVindo {
  margin-top: 2.5rem;
  margin-left: 45%;
  font-size: 2.5ch;
}

.botaoDeVoltar {
  width: 6rem;
  height: 2rem;
  margin-bottom: 0.1rem;
  margin-right: 1.5rem;

  font-size: 2ch;
}
</style>
