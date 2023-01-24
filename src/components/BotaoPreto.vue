<template>
  <button class="botaoPreto">{{ tituloDoBotao }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoFundoPreto",
  props: {
    tituloDoBotao: {
      type: String,
      required: true,
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
