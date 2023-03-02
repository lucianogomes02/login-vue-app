<template>
  <main class="container__cadastro">
    <Cabecalho></Cabecalho>
    <section class="cadastro">
      <FormularioDoUsuario
        class="formulario__de__cadastro"
        :tituloDoFormulario="'Preencha suas informações de cadastro'"
      />
      <Botao
        class="botao__cadastrar"
        :tituloDoBotao="'Cadastrar'"
        :corDoBotao="'#ffffff'"
        :corDaFonte="'#31ff08'"
        :borda="'5px'"
        :corDaBorda="'#31ff08'"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cabecalho from "../components/Cabecalho.vue";
import Botao from "../components/Botao.vue";
import FormularioDoUsuario from "../components/FormularioDoUsuario.vue";

export default defineComponent({
  name: "CadastroView",
  components: { Cabecalho, Botao, FormularioDoUsuario },
});
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/assistant");

* {
  font-family: "Assistant", sans-serif;
  font-weight: 350;
}

.container__cadastro {
  background: #8fddf5;
  width: 120rem;
  height: 61rem;
  margin: -8px;
}

.cadastro {
  width: 120rem;
  height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.botao__cadastrar {
  margin-left: 97rem;
}
</style>
