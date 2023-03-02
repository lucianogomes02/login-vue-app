<template>
  <main class="container__usuario">
    <Cabecalho></Cabecalho>
    <section class="usuario">
      <div class="informacoes__do__usuario"></div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cabecalho from "../components/Cabecalho.vue";

export default defineComponent({
  name: "UsuarioView",
  components: { Cabecalho },
});
</script>

<style scoped>
.container__usuario {
  background: #8fddf5;
  width: 120rem;
  height: 61rem;
  margin: -8px;
}

.usuario {
  padding: 10rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.informacoes__do__usuario {
  background-color: #b3e7f77c;
  width: 80rem;
  height: 40rem;
  border-radius: 2rem;
}
</style>
