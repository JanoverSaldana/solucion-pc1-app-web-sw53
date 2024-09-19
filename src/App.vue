<script >

import CardContent from "./hipo/components/card-content.component.vue";
import ToolbarContent from "./public/toolbar-content.component.vue";
import FooterContent from "./public/footer-content.component.vue";

export default {
  name: "App",
  components: {FooterContent, ToolbarContent, CardContent}
}

</script>

<template>

  <toolbar-content></toolbar-content>

  <card-content></card-content>

  <footer-content> </footer-content>


</template>

<style scoped>

</style>
