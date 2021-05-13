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

    <SiteHeader />
    <Nuxt />
    <SiteFooter />
    <!-- </div> -->
  </div>
</template>

<style>
:focus {
  outline: 2px dashed #2d8262 !important;
  outline-offset: 0.5em !important;
}
</style>
