<template>
  <header
    role="banner"
    class="site-head shadow fixed w-full z-40 bg-light"
    :class="[
      $store.state.showDrafPreviewBanner == true ? 'bodyPreviewActive' : ''
    ]"
  >
    <Header-TopBar />

    <!-- .wrapper -->
    <div class="">
      <div class="site-head__inner flex md:block">
        <!-- x-data="{ mainMenuisOpen: false }" -->
        <NuxtLink class="logo md:absolute flex md:block items-center" to="/">
          <img
            class="hidden md:block"
            src="~/assets/images/logos/canadian-adventure-camp-logo.png"
            alt="Canadian Adventure Camp Logo"
          />
          <span
            class="md:hidden text-base sm:text-lg pl-4 font-bold flex items-center"
          >
            <svg-icon
              style=""
              name="tree-duotone"
              height="1.5em"
              width="1.5em"
              class="text-green mr-2"
            />
            <span class="block"> Canadian Adventure Camp</span>
          </span>
        </NuxtLink>

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
  top: 0rem;
  left: 50%;

  z-index: 500;
  & img {
    width: 90px;
  }
}
@media screen and (min-width: 768px) {
  .logo {
    transform: translateX(-90px);
  }
  .logo img {
    width: 200px;
  }
}
</style>
