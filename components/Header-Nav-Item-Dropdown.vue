<template>
  <ul
    class="nav__submenu"
    :id="mainNavItem.name + '-submenu'"
    :aria-label="mainNavItem.name + 'sub-menu'"
  >
    <!-- x-show="subMenuIsOpen" -->
    <li
      v-for="column in mainNavItem.children"
      :key="column.name"
      class="nav__column"
    >
      <span class="col-title">{{ column.name }}</span>
      <ul class="nav__column-items">
        <li v-for="columnItem in column.children" :key="columnItem.name">
          <a :href="columnItem.url">{{ columnItem.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    mainNavItem: Object
  }
};
</script>

<style></style>
