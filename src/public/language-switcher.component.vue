<script>

export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  },

  created() {
    console.log("Language switcher created");
  }
}
</script>

<template>

  <pv-select-button v-model="$i18n.locale" :options="languages"/>

</template>


<style scoped>

</style>