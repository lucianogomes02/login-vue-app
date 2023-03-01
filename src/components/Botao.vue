<template>
  <button
    class="botaoPreto"
    :style="{
      backgroundColor: corDoBotao,
      color: corDaFonte,
      border: borda,
      borderColor: corDaBorda,
    }"
  >
    {{ tituloDoBotao }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoPreto",
  props: {
    tituloDoBotao: {
      type: String,
      required: true,
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
  },
});
</script>

<style scoped>
.botaoPreto {
  margin-top: 1rem;
  border: none;
  width: 10rem;
  height: 3rem;
  color: #ffffff;
  background-color: #000;
  border-radius: 41px;
}
</style>
