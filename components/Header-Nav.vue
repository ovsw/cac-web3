<template>
  <nav
    class="[ nav ] [ site-head__nav ] flex md:block ml-auto mr-4 md:mr-0"
    id="nav-list"
    aria-label="Main Menu"
  >
    <!-- x-bind:data-open="mainMenuisOpen"
    :aria-expanded="mainMenuisOpen" -->
    <div class="hamburger-menu__container flex md:hidden">
      <button
        aria-controls="nav-list"
        aria-label="Main Menu toggle"
        :aria-expanded="menuOpen"
        class="hamburger-menu hidden"
        @click.prevent="toggleMenu"
        :data-open="menuOpen"
      >
        <div></div>
      </button>
    </div>

    <ul
      class="nav__list 
      
      absolute w-full z-10  

      shadow-lg justify-center bg-light-dark left-0 right-0 top-10

      p-4 pb-32 md:pb-2 md:pt-2
      mt-8 md:mt-0

      md:static
      md:flex 
      
       overflow-y-scroll md:overflow-y-visible
        h-screen md:h-auto
    "
      style="top:60px;"
      :class="menuOpen ? 'block' : 'hidden'"
    >
      <div class="md:flex md:justify-end  md:mr-40 ">
        <li class="nav__item">
          <HeaderMegamenu
            :menuData="nav[1]"
            :menuIndex="1"
            @close-mobile-menu="hideMenu"
          />
        </li>
        <li class="nav__item">
          <HeaderMegamenu
            :menuData="nav[0]"
            :menuIndex="2"
            @close-mobile-menu="hideMenu"
          />
        </li>
      </div>

      <div class="md:flex md:justify-start ">
        <li class="nav__item ">
          <HeaderMegamenu
            :menuData="nav[2]"
            :menuIndex="3"
            @close-mobile-menu="hideMenu"
          />
        </li>
        <li class="nav__item md:mr-8" @click="hideMenu">
          <NuxtLink to="/contact/" class="">Contact Us</NuxtLink>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import nav from "@/assets/nav2.json";
export default {
  data() {
    return {
      nav: nav,
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    hideMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style>
.nav__list {
  top: 330px;
}
.hamburger-menu__container {
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.hamburger-menu {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.hamburger-menu div {
  width: 1.6rem;
  height: 3px;
  border-radius: 3px;
  background-color: green;
  position: relative;
  z-index: 1001;
  transition: 0.5s;
}

.hamburger-menu div:before,
.hamburger-menu div:after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: green;
  border-radius: 3px;
  transition: 0.5s;
}

.hamburger-menu div:before {
  transform: translate(-13px, -7px);
}

.hamburger-menu div:after {
  transform: translate(-13px, 7px);
}

.hamburger-menu[data-open="true"] div {
  background-color: transparent;
}

.hamburger-menu[data-open="true"] div:before {
  transform: translate(-13px, 0) rotate(-45deg);
}

.hamburger-menu[data-open="true"] div:after {
  transform: translate(-13px, 0) rotate(45deg);
}

@keyframes animation {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
