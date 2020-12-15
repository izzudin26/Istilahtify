<template>
  <div>
    <v-col class="mx-auto" md="6" sm="12" lg="6">
      <v-text-field
        solo
        class="keyword-field"
        label="Kata Kunci"
        append-icon="mdi-magnify"
        @click:append="callIstilah"
      >
      </v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  methods: {
    callIstilah: () => {
      console.log("Triger");
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
