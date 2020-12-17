<template>
  <div>
    <transition name="fade">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in item" :key="i">
          <v-expansion-panel-header>
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span v-html="item.snippet"></span>
            <v-btn color="primary" text>Baca Selengkapnya</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels></transition
    >
  </div>
</template>

<script>
export default {
  name: "WikipediaComponent",
  props: {
    item: Array
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
