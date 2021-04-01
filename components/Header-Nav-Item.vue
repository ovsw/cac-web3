<template>
  <li class="nav__item">
    <button
      :aria-label="mainNavItem.name + 'sub-menu toggle'"
      :aria-controls="mainNavItem.name + '-submenu'"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <!-- x-bind:data-state="subMenuIsOpen ? 'active' : ''"
            @click="subMenuIsOpen = !subMenuIsOpen" -->
      {{ mainNavItem.name }}
    </button>

    <Header-Nav-Item-Dropdown :mainNavItem="mainNavItem" />
  </li>
</template>

<script>
export default {
  props: {
    mainNavItem: Object
  }
};
</script>

<style></style>
