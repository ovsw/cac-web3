<template>
  <div>
    <a class="[ skip-link ] [ button ]" href="#main-content">Skip to content</a>
    <client-only>
      <button
        class="refreshPreview"
        v-if="$store.state.showDrafPreviewBanner"
        @click="$nuxt.refresh()"
      >
        Draft Preview. Click here to refresh
      </button>
    </client-only>
    <!-- <div :class="[$store.state.showDrafPreviewBanner == true ? 'bodyPreviewActive' : '', 'site-wrap']"> -->

    <site-header />
    <Nuxt />
    <site-footer />
    <!-- </div> -->
  </div>
</template>

<style></style>
