<template>
  <router-link :to="{ path: botao.caminho || '/' }" class="link">
    <button
      class="botao"
      :style="{
        backgroundColor: botao.cor,
        color: botao.corDaFonte,
        width: botao.largura,
        height: botao.altura,
        marginTop: botao.margemTopo,
      }"
    >
      {{ botao.titulo }}
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type Botao from "@/types/Botao";

export default defineComponent({
  name: "Botao",
  props: {
    botao: {
      required: true,
      type: Object as PropType<Botao>,
    },
  },
});
</script>

<style scoped>
.botao {
  margin-top: 1rem;
  border: none;
  width: 10rem;
  height: 3rem;
  color: #ffffff;
  background-color: #000;
  border-radius: 41px;
}

.botao:hover {
  opacity: 80%;
}
</style>
