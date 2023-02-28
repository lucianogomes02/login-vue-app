<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {},
});
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/assistant");

* {
  font-family: "Assistant", sans-serif;
  font-weight: 350;
}

</style>
