<template>
  <v-app>
    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MainPage from "./views/MainPage.vue";

export default Vue.extend({
  name: "App",

  components: {
    MainPage
  },

  data: () => ({
    //
  })
});
</script>
