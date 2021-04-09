<template>
  <nav class="[ nav ] [ site-head__nav ]" id="nav-list" aria-label="Main Menu">
    <!-- x-bind:data-open="mainMenuisOpen"
    :aria-expanded="mainMenuisOpen" -->
    <ul class="nav__list">
      <template v-for="mainNavItem in nav">
        <Header-Nav-Item
          :mainNavItem="mainNavItem"
          v-if="mainNavItem.children.length > 0"
          :key="mainNavItem.name"
        />

        <li v-else :key="mainNavItem.name" class="nav__item">
          <a href="/">{{ mainNavItem.name }}</a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import nav from "@/assets/nav.json";
export default {
  data() {
    return {
      nav: nav
    };
  }
};
</script>

<style></style>
