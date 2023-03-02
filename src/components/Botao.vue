<template>
  <router-link :to="{ path: caminho }" class="link">
    <button
      class="botao"
      :style="{
        backgroundColor: corDoBotao,
        color: corDaFonte,
        border: borda,
        borderColor: corDaBorda,
        width: largura,
        height: altura,
        marginTop: margemTopo,
      }"
    >
      {{ tituloDoBotao }}
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Botao",
  props: {
    tituloDoBotao: {
      type: String,
      required: true,
    },
    caminho: {
      type: String,
      required: false,
      default: "/",
    },
    corDoBotao: {
      type: String,
      required: false,
    },
    corDaFonte: {
      type: String,
      required: false,
    },
    tamanhoDaFonte: {
      type: Number,
      required: false,
    },
    borda: {
      type: String,
      required: false,
    },
    corDaBorda: {
      type: String,
      required: false,
    },
    largura: {
      type: String,
      required: false,
    },
    altura: {
      type: String,
      required: false,
    },
    margemTopo: {
      type: String,
      required: false,
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
</style>
