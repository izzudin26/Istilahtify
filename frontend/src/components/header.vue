<template>
  <div id="header">
    <v-container>
      <v-row class="pa-5" justify="center" align="center">
        <v-img :src="require('@/assets/vect.jpg')" max-width="350px"></v-img>
        <v-row justify="center">
          <v-col cols="auto" class="text-center">
            <h1 class="headerTitle">Istilahtify</h1>
            <p class="pt-5 header-subtitle">
              Cari dan temukan arti dari beragam Istilah Bahasa Indonesia
            </p>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#header {
  background-color: #73cdff;
}

.headerTitle {
  color: white;
  text-shadow: 1px 2px 3px #000000;
}

.header-subtitle {
  color: white;
  text-shadow: 1px 2px 2px #000000;
  font-size: 1.5rem;
}
</style>
