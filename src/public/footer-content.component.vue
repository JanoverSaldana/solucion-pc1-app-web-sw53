<script>
export default {
  name: "footer-content"
}
</script>

<template>

  <div class="grid bg-primary mt-4 p-4 align-content-start">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>Copyright © 2024 Hipo, inc All rights reserved.</p>
    </div>
    <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
      <p>
        {{ $t('authoring-phrase.author', { data: 'Tus datos'}) }}
      </p>
    </div>
  </div>



</template>

<style scoped>

</style>




