<template>
  <li class="nav__item" v-on-click-outside="closeSubMenu">
    <button
      :aria-label="mainNavItem.name + 'sub-menu toggle'"
      :aria-controls="mainNavItem.name + '-submenu'"
      aria-haspopup="true"
      :aria-expanded="showSubMenu"
      @click="toggleSubMenu"
    >
      {{ mainNavItem.name }}
    </button>

    <header-nav-item-dropdown :mainNavItem="mainNavItem" v-show="showSubMenu" @close-subMenu="closeSubMenu"/>
  </li>
</template>

<script>
import { mixin as onClickOutside } from "vue-on-click-outside";
import HeaderNavItemDropdown from './Header-Nav-Item-Dropdown.vue';

export default {
  components: { HeaderNavItemDropdown },
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
