<template>
  <button class="redeSocial">
    <font-awesome-icon :icon="['fab', redeSocial]" class="icon alt"/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoRedeSocial",
  props: {
    redeSocial: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.redeSocial {
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 90px;
  margin: 0.3rem;
}

.icon {
  width: 2rem;
  height: 2rem;
}
</style>
