<template>
  <div class="lg:relative" v-on-click-outside="handleClickOutside">
    <!-- @mouseover="showMenu" @mouseleave="hideMenu" -->
    <button class="" @click="toggleMenu">
      {{ menuData.name }}
    </button>
    <!-- @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys" -->
    <!-- @focus="showMenu" -->

    <!-- <div class="absolute w-full">&nbsp;</div> -->
    <transition name="mega-menu-fade">
      <div
        v-show="isVisible"
        class="mega-menu 
        w-full normal-case font-normal bg-green text-light md:bg-light md:text-dark md:shadow-md rounded-lg border
        z-30 left-0 overflow-hidden mt-4 

        md:w-auto md:absolute md:left-2 md:right-2
        
        lg:w-160 lg:z-10 lg:-left-8 xl:-left-16 left-
        "
        :class="{ 'lg:-left-80': thirdItem }"
      >
        <!-- megamenu components -->
        <template v-for="(block, index) in menuData.megaMenu">
          <ul
            v-if="block.type == 'columnsSection'"
            :key="block.url"
            class="flex flex-col md:flex-row md:flex-wrap  border-b pl-2 py-4 lg:px-6 lg:py-6 "
          >
            <li
              v-for="(item, index) in block.items"
              :key="index"
              class="
              w-full md:w-1/2 
              flex-shrink-0
              p-2 pl-4
              text-base md:text-lg
              "
              :class="[
                item.subitems && item.subitems.length > 0 ? 'md:w-full' : ''
              ]"
            >
              <NuxtLink
                :to="item.url"
                class="flex group"
                @click.native="hideMenu"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <svg-icon
                  style="position: relative; top: 0.5em;"
                  :name="item.icon"
                  height="1.5em"
                  width="1.5em"
                  class="text-light md:text-green"
                />
                <span class="ml-3">
                  <span
                    class="block font-bold group-hover:text-green-light flex items-center"
                  >
                    <span>{{ item.name }}</span>
                    <span v-if="item.new == true" class="newTag">
                      New
                    </span>
                  </span>
                  <span
                    class="block font-normal lowercase text-sm opacity-60 md:text-gray-600 group-hover:text-green"
                    >{{ item.description }}</span
                  >
                </span>
              </NuxtLink>
              <!-- extra links start -->
              <span
                v-if="item.subitems && item.subitems.length > 0"
                class="block mt-2 ml-12 md:ml-8  text-sm text-gray-600 group-hover:text-yellow uppercase font-bold tracking-widest space-y-2 "
              >
                <span
                  v-for="(subitem, index) in item.subitems"
                  :key="index"
                  class="block md:inline"
                >
                  <span v-if="index != 0" class="hidden md:inline">, </span
                  ><NuxtLink
                    :to="subitem.url"
                    class="underline text-light md:text-dark py-1 inline-block"
                    >{{ subitem.name }}</NuxtLink
                  >
                </span>
              </span>
              <!-- end extra links -->
            </li>
          </ul>
          <ul
            v-else-if="block.type == 'bottomSection'"
            :key="index"
            class="bg-gray-100 px-8 py-8 space-y-4 bg-green"
          >
            <li
              v-for="(item, index) in block.items"
              :key="index"
              class="text-base lg:text-lg text-light"
            >
              <NuxtLink :to="item.url" class="flex lg:items-center group">
                <svg-icon :name="item.icon" height="1.5em" width="1.5em" />

                <span class="flex flex-col lg:flex-row lg:items-center">
                  <span class="block ml-2 font-bold  group-hover:text-yellow">
                    {{ item.name }}
                    <span
                      v-if="item.new == true"
                      class="ml-1 bg-red text-yellow px-2 py-1 relative -inset-y-1 rounded-full uppercase font-bold text-xs"
                    >
                      New
                    </span>
                  </span>
                  <!-- description -->
                  <span
                    v-if="item.description != ''"
                    class="block ml-2 lg:ml-4 mt-1 text-sm text-gray-600 group-hover:text-yellow opacity-75"
                    >{{ item.description }}
                  </span>
                </span>
              </NuxtLink>
              <!-- extra links start -->
              <span
                v-if="item.subitems.length > 0"
                class="block mt-2 ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-yellow"
              >
                <span
                  v-for="(subitem, index) in item.subitems"
                  :key="index"
                  class="block lg:inline"
                >
                  <span v-if="index != 0" class="hidden lg:inline">, </span
                  ><NuxtLink :to="subitem.url" class="underline">{{
                    subitem.name
                  }}</NuxtLink>
                </span>
              </span>
              <!-- end extra links -->
            </li>
          </ul>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as onClickOutside } from "vue-on-click-outside";

export default {
  props: {
    menuData: Object,
    menuIndex: Number
  },
  mixins: [onClickOutside],
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  computed: {
    thirdItem: function() {
      if (this.menuIndex == 3) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0
    };
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    toggleMenu() {
      this.isVisible = !this.isVisible;
    },

    handleClickOutside() {
      this.isVisible = false;
      this.focusedIndex = 0;

      // check that desktop menu is visible
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
      this.$emit("close-mobile-menu");
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    }
  }
};
</script>

<style scoped>
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
