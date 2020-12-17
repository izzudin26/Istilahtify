<template>
  <div>
    <v-col class="mx-auto" md="8" sm="12" lg="6">
      <v-form
        ref="form"
        v-model="isValid"
        lazy-validation
        v-on:submit.prevent="callIstilah()"
      >
        <v-text-field
          solo
          v-model="keyword"
          class="keyword-field"
          label="Kata Kunci"
          append-icon="mdi-magnify"
          @click:append="callIstilah()"
          :loading="isProcess"
          :rules="keywordRules"
        >
        </v-text-field>
      </v-form>
    </v-col>
    <v-container class="pb-10">
      <v-tabs grow v-model="tab">
        <v-tab>Wikipedia</v-tab>
        <v-tab>KBBI</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <WikipediaComponent :item="wikidata" />
        </v-tab-item>
        <v-tab-item>
          <KbbiComponent :items="kbbiArti" :title="kbbiTitle" />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WikipediaComponent from "@/components/wikipediaComponent.vue";
import KbbiComponent from "@/components/kbbiComponent.vue";
import { istilahService } from "@/WebServices/istilahServices.ts";

export default Vue.extend({
  name: "Body",
  components: {
    WikipediaComponent,
    KbbiComponent
  },
  data: () => ({
    tab: null,
    isValid: true,
    isProcess: false,
    keywordRules: [(value: string) => !!value || "Kata Kunci Harus diisi"],
    keyword: "",
    wikidata: [] as any[],
    kbbiTitle: "",
    kbbiArti: [] as any[]
  }),
  methods: {
    callIstilah(): void {
      if (this.isValid) {
        this.isProcess = true;

        //get from wikipedia
        istilahService
          .getwiki(this.keyword)
          .then(result => {
            this.wikidata = result.data;
          })
          .catch(err => {
            console.log(err);
          });

        //get from kbbi
        istilahService.getKBBI(this.keyword).then(result => {
          this.kbbiTitle = result.data.title;
          this.kbbiArti = result.data.arti;
          this.isProcess = false;
        });
      }
    }
  }
});
</script>

<style>
.keyword-field {
  top: -30px;
  left: 0;
  right: 0;
  position: relative;
}
</style>
