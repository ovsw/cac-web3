<template>
  <header
    role="banner"
    class="site-head shadow"
    :class="[
      $store.state.showDrafPreviewBanner == true ? 'bodyPreviewActive' : ''
    ]"
  >
    <Header-TopBar />

    <!-- .wrapper -->
    <div class="">
      <div class="site-head__inner flex md:block">
        <!-- x-data="{ mainMenuisOpen: false }" -->
        <a class="logo md:absolute flex md:block items-center" href="/">
          <img
            class="hidden md:block"
            src="~/assets/images/logos/canadian-adventure-camp-logo.png"
            alt="Canadian Adventure Camp Logo"
          />
          <span class="md:hidden text-base sm:text-lg pl-4">
            Canadian Adventure Camp
          </span>
        </a>

        <Header-Nav />
      </div>
    </div>
    <!-- <HeaderAlert /> -->
  </header>
</template>

<script>
export default {
  name: "SiteHeader"
};
</script>

<style lang="scss" scoped>
.logo {
  top: -2.3rem;
  left: 50%;

  z-index: 500;
  & img {
    width: 90px;
    @include media-query('md') {
      width: 180px;
    }
  }
}
@media screen and (min-width: 768px) {
  .logo {
    transform: translateX(-100px);
  }
}
</style>
