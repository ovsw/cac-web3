<template>
  <div>
    <a class="[ skip-link ] [ button ]" href="#main-content">Skip to content</a>

    <header role="banner" class="[ site-head ]">
      <div class="site-head__topbar text-350">
        <div class="wrapper">
          <!-- <div>
          <a href="tel:1-800-966-1406"
            >{% include "partials/svg/icon-phone.svg" %} 1 (800) 966-1406</a
          >
          <a href="/"
            >{% include "partials/svg/icon-calendar.svg" %} Dates &amp; Rates</a
          >
          <a href="/"
            >{% include "partials/svg/icon-question.svg" %} Request Info</a
          >
        </div> -->

          <div>
            <a href="/"
              >{% include "partials/svg/icon-newspaper.svg" %} CAC Blog</a
            >
            <a href="/" class="accented-link"
              >{% include "partials/svg/icon-question.svg" %} Enroll Now for
              2021</a
            >
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="site-head__inner" x-data="{ mainMenuisOpen: false }">
          <a class="site-head__logo" href="/">
            <img
              src="/images/logos/canadian-adventure-camp-logo.png"
              alt="Canadian Adventure Camp Logo"
            />
          </a>

          <!-- nav start -->
          <nav
            class="[ nav ] [ site-head__nav ]"
            id="nav-list"
            aria-label="Main Menu"
            x-bind:data-open="mainMenuisOpen"
            :aria-expanded="mainMenuisOpen"
          >
            <ul>
              <li v-for="item in nav" :key="item.name">
                {{ item.name }}
              </li>
            </ul>
          </nav>
          <!-- end navigation -->

          <!-- mobile menu toggle -->
          <div class="hamburger-menu__container">
            <button
              aria-controls="nav-list"
              aria-label="Main Menu toggle"
              :aria-expanded="mainMenuisOpen"
              class="hamburger-menu"
              @click.prevent="mainMenuisOpen = !mainMenuisOpen"
              x-bind:data-open="mainMenuisOpen"
            >
              <div></div>
            </button>
          </div>
          <!-- end mobile menu toggle -->

          <!-- right column -->
          {#
          <div class="[ site-head__right-column ]">
            <div class="site-head__phone">
              <a href="tel:1-800-966-1406"
                ><span class="visually-hidden">call us</span>
                <span>1 (800) 966-1406</span></a
              >
            </div>
            <!-- /.site-head__phone -->

            <ul class="site-head__social">
              {% include 'partials/social-icons.html' %}
            </ul>
          </div>
          #} {# END RIGHT COLUMN #}
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
            <button @click="alertvisible = false">Dismiss</button>
          </div>
        </div>
      </div>
    </header>
  </div>
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
