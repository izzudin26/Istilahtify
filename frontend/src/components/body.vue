<template>
  <div>
    <v-col class="mx-auto" md="8" sm="12" lg="6">
      <v-form ref="form" v-model="isValid" lazy-validation>
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
    <v-container>
      <v-tabs centered>
        <v-tab>Wikipedia</v-tab>
        <v-tab>KBBI</v-tab>
      </v-tabs>
    </v-container>
  </div>
</template>

<script lang="ts">
import { istilahService } from "@/WebServices/istilahServices.ts";

export default {
  name: "Body",
  data: () => ({
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
            this.wikidata = result.data.slice(0, 5);
            console.log(this.wikidata);
          })
          .catch(err => {
            console.log(err);
          });

        //get from kbbi
        istilahService.getKBBI(this.keyword).then(result => {
          this.kbbiTitle = result.title;
          this.kbbiArti = result.data.arti;
          console.log(this.kbbiArti);
        });
      }
    }
  }
};
</script>

<style>
.keyword-field {
  top: -30px;
  left: 0;
  right: 0;
  position: relative;
}
</style>
