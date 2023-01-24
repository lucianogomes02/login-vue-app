<template>
  <button class="{{ classeDoBotao }}">{{ tituloDoBotao }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoFundoPreto",
  props: {
    classeDoBotao: {
      type: String,
      required: true,
    },
    tituloDoBotao: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
button {
  width: 10rem;
  height: 3rem;
  color: #000000;
  border-radius: 41px;
}
</style>
