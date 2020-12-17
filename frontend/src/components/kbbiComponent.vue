<template>
  <div>
    <v-card
      ><div class="pa-3" v-if="items.length > 0">
        <v-card-title>{{ title }}</v-card-title>
        <ul>
          <li v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-else class="pa-5">
        <h3 class="text-center">Istilah {{ title }} Tidak Ditemukan</h3>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "KbbiComponent",
  props: {
    title: String,
    items: Array
  }
};
</script>

<style></style>
