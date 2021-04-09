<template>
  <div class="lg:relative">
    <!-- @mouseover="showMenu" @mouseleave="hideMenu" -->
    <button
      class=" text-base focus:outline-none md:p-4 focus:bg-green focus:text-light-light font-bold uppercase"
      @click="toggleMenu"
    >
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
        w-full normal-case font-normal bg-light shadow-md rounded-lg border
        z-30 left-0 overflow-hidden mt-4 

        md:w-auto md:absolute md:left-2 md:right-2
        
        lg:w-160 lg:z-10 lg:-left-8 xl:-left-16 left-
        "
        :class="{'lg:-left-80' : thirdItem}"
        >
        <!-- megamenu components -->
        <template v-for="(block, index) in menuData.megaMenu">
          <ul
            v-if="block.type == 'columnsSection'"
            :key="index"
            class="flex flex-col md:flex-row md:flex-wrap  border-b pl-2 py-4 lg:pl-6 lg:py-6 "
          >
            <li
              v-for="item in block.items"
              :key="item.url"
              class="
              w-full md:w-1/2 
              flex-shrink-0
              p-2 
              text-base md:text-lg
              "
            >
              <NuxtLink
                :to="item.url"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <svg-icon
                  :name="item.icon"
                  title="Facebook icon"
                  height="1.25em"
                  width="1.25em"
                />
                <span class="ml-2">
                  <span
                    class="block font-bold group-hover:text-green-light flex items-center"
                  >
                    <span>{{ item.name }}</span>
                    <span
                      v-if="item.new == true"
                      class="ml-1 bg-red text-yellow px-2 py-1 relative -inset-y-1 rounded-full uppercase font-bold text-xs"
                    >
                      New
                    </span>
                  </span>
                  <span
                    class="block text-sm text-gray-600 group-hover:text-green"
                    >{{ item.description }}</span
                  >
                </span>
              </NuxtLink>
            </li>
          </ul>
          <ul
            v-else-if="block.type == 'bottomSection'"
            :key="index"
            class="bg-gray-100 px-8 py-8"
          >
            <li v-for="item in block.items" :key="item.url" class="mb-6 text-base lg:text-lg">
              <NuxtLink
                :to="item.url"
                class="flex lg:items-center group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg-icon
                  :name="item.icon"
                  title="Facebook icon"
                  height="1.5em"
                  width="1.5em"
                />
                
                <span class="flex flex-col lg:flex-row lg:items-center">
                  <span class="block ml-2 font-bold  group-hover:text-green">
                    {{ item.name }}
                    <span
                      v-if="item.new == true"
                      class="ml-1 bg-red text-yellow px-2 py-1 relative -inset-y-1 rounded-full uppercase font-bold text-xs"
                    >
                      New
                    </span>
                  </span>
                  <!-- description -->
                  <!-- <span
                    v-if="item.description != ''"
                    class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-green"
                    >{{ item.description }}
                  </span> -->

                  <!-- extra links -->
                  <span
                    v-if="item.subitems != []"
                    class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-green"
                  >
                    <template v-for="(subitem, index) in item.subitems">
                      <span :key="subitem.url">
                        <span v-if="index != 0">, </span>
                        <NuxtLink :to="subitem.url" class="underline">
                          {{ subitem.name }}
                        </NuxtLink>
                      </span>
                    </template>
                  </span>
                  <!-- end extra links -->
                </span>
              </NuxtLink>
            </li>
          </ul>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menuData: Object,
    menuIndex: Number
  },
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  computed: {
    thirdItem: function () {
      if (this.menuIndex == 3) {
        return true
      }
      return false
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
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
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
