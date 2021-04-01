<template>
  <div>
    <client-only>
      <button
        class="refreshPreview"
        v-if="$store.state.showDrafPreviewBanner"
        @click="$nuxt.refresh()"
      >
        Draft Preview. Click here to refresh
      </button>
    </client-only>
    <div class="site-wrap">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<style></style>
