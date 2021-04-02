<template>
  <div>
    <a class="[ skip-link ] [ button ]" href="#main-content">Skip to content</a>

    <header role="banner" class="[ site-head ]">
      <Header-TopBar />

      <div class="wrapper">
        <div class="site-head__inner">
          <!-- x-data="{ mainMenuisOpen: false }" -->
          <a class="site-head__logo" href="/">
            <img
              src="~/assets/images/logos/canadian-adventure-camp-logo.png"
              alt="Canadian Adventure Camp Logo"
            />
          </a>

          <Header-Nav />

          <!-- mobile menu toggle -->
          <div class="hamburger-menu__container">
            <button
              aria-controls="nav-list"
              aria-label="Main Menu toggle"
              class="hamburger-menu"
            >
              <!-- :aria-expanded="mainMenuisOpen" -->
              <!-- @click.prevent="mainMenuisOpen = !mainMenuisOpen"
              x-bind:data-open="mainMenuisOpen" -->
              <div></div>
            </button>
          </div>
          <!-- end mobile menu toggle -->
        </div>
      </div>
      <div
        class="alert text-400"
        x-data="{ alertvisible: true }"
        x-show.transition="alertvisible"
      >
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
    </header>
  </div>
</template>

<script>
export default {
  name: "SiteHeader"
};
</script>

<style></style>
