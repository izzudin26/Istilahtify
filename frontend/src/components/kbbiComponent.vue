<template>
  <div>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <div class="pa-3">
        <ul v-if="items.length > 0">
          <li v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
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
