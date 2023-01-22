<template>

    <div class="login"></div>
    <div class="novoAqui"></div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Login",
  components: {},
  data (){},

});

</script>


<style scoped>
.login {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: #20BEF0;
    opacity: 38%;
}

.novoAqui {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    top: 0px;
    background-color: #00A3FF;
}


</style>
