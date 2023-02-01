<template>
  <main class="containerCadastro">
    <Cabecalho></Cabecalho>
    <body class="cadastro"></body>
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
