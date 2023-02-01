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
  margin-top: 1.8rem;
  margin-left: 42%;
}

.botaoDeVoltar {
  width: 5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
}
</style>
