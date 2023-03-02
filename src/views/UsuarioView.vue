<template>
    <main class="container__usuario">
        <Cabecalho></Cabecalho>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cabecalho from "../components/Cabecalho.vue";

export default defineComponent({
    name: "UsuarioView",
    components: { Cabecalho },
})
</script>

<style scoped>
.container__usuario {
  background: #8fddf5;
  width: 120rem;
  height: 61rem;
  margin: -8px;
}

</style>
