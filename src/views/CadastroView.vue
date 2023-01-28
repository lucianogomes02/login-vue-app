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
.containerCadastro {
  display: flex;
  margin: -8px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.cadastro {
    background: #8fddf5;
    width: 100%;
    height: 95.7vh;
    margin: -1px;
}
</style>
