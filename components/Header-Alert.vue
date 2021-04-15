<template>
  <div
    class="alert text-sm py-2 bg-green-dark text-center text-yellow-light relative"
  >
    <!-- x-data="{ alertvisible: true }"
      x-show.transition="alertvisible" -->
    <div class="wrapper">
      <div class="alert__inner">
        <p>
          <a href="#">Alert Text Here - Read our latest COVID Updates</a>
        </p>
        <button>Dismiss</button>
        <!--  @click="alertvisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
