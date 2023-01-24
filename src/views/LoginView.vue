<template>
  <main class="container">
      <div class="login">

      </div>
      <div class="novoAqui">

      </div>

  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: "LoginView",
components: {},
data (){},

});

</script>


<style scoped>
.container {
  display: flex;
  margin: -8px;
}

.login { 
  width: 60rem;
  height: 100vh;
  background-color: #20BEF0;
  opacity: 38%;
}

.novoAqui {
  width: 61rem;
  height: 100vh;
  background-color: #00A3FF;
}

</style>
