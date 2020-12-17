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
            <v-btn
              color="primary"
              text
              @click="openWiki(item.pageid, item.title)"
            >
              Baca Selengkapnya
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels></transition
    >
    <v-dialog v-model="isShowDialog" max-width="800px">
      <v-toolbar dense class="toolbar-dialog">
        {{ currentTitle }}
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="isShowDialog = !isShowDialog">
          Tutup
        </v-btn>
      </v-toolbar>
      <iframe
        class="frameBrowser"
        :src="`https://id.m.wikipedia.org/?curid=${currentPageId}`"
      ></iframe>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WikipediaComponent",
  data: () => ({
    isShowDialog: false,
    currentPageId: 0,
    currentTitle: ""
  }),
  props: {
    item: Array
  },
  methods: {
    openWiki(id: number, title: string) {
      this.currentTitle = title;
      this.currentPageId = id;
      this.isShowDialog = true;
    }
  }
});
</script>

<style>
.toobar-dialog {
  top: 4rem;
  position: -webkit-sticky;
  position: sticky;
}

.frameBrowser {
  height: 1000vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
