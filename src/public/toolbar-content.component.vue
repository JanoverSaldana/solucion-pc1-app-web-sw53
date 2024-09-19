<script>

import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-content",
  components: {LanguageSwitcher},

}
</script>

<template>

  <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <div class="flex items-center gap-2">
       <h3>Hipo University API Showcase</h3>
      </div>
    </template>

    <template #end>
      <div class="flex items-center gap-2">
        <language-switcher></language-switcher>
      </div>
    </template>
  </pv-toolbar>



</template>

<style scoped>

</style>