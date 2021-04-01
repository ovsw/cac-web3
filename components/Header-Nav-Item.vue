<template>
  <li class="nav__item" v-on-click-outside="closeSubMenu">
    <button
      :aria-label="mainNavItem.name + 'sub-menu toggle'"
      :aria-controls="mainNavItem.name + '-submenu'"
      aria-haspopup="true"
      aria-expanded="false"
      @click="toggleSubMenu"
    >
      <!-- x-bind:data-state="subMenuIsOpen ? 'active' : ''"
            @click="subMenuIsOpen = !subMenuIsOpen" -->
      {{ mainNavItem.name }}
    </button>

    <Header-Nav-Item-Dropdown :mainNavItem="mainNavItem" v-show="showSubMenu" />
  </li>
</template>

<script>
import { mixin as onClickOutside } from "vue-on-click-outside";

export default {
  props: {
    mainNavItem: Object
  },
  mixins: [onClickOutside],
  data() {
    return { showSubMenu: false };
  },
  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    },
    closeSubMenu() {
      this.showSubMenu = false;
    }
  }
};
</script>

<style></style>
