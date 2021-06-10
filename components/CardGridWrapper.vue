<template>
  <section class="py-12">
    <div class="container mx-auto">
      <h2 v-if="title" class="mb-10">{{ title }}</h2>
      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-8"
      >
        <slot></slot>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
