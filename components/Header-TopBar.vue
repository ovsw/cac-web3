<template>
  <div class="site-head__topbar text-sm bg-green text-light">
    <div class="wrapper flex justify-between items-center">
      <div class="sm:space-x-4">
        <a href="tel:1-800-966-1406" class="inline-flex items-center">
          <svg-icon
            name="icon-phone"
            title="phone icon"
            height="1em"
            width="1em"
            class=""
          />
          1 (800) 966-1406
        </a>
        <a href="/dates-and-rates/" class="hidden sm:inline-flex items-center"
          ><svg-icon
            name="icon-calendar"
            title="calendar icon"
            height="1em"
            width="1em"
            class="hidden sm:inline"
          />
          Dates &amp; Rates</a
        >
        <a href="/contact/" class="hidden lg:inline-flex items-center"
          ><svg-icon
            name="icon-question"
            title="question mark icon"
            width="1em"
            height="1em"
            class="inline"
          />
          Request Info</a
        >
      </div>

      <div class="md:space-x-4">
        <NuxtLink to="/blog/" class="hidden md:inline-block">
          <svg-icon
            name="icon-newspaper"
            title="newspaper icon"
            width="1em"
            height="1em"
            class="inline"
          />
          CAC Blog</NuxtLink
        >
        <a
          href="https://canadianadventurecamp.campbrainregistration.com/?ReturnUrl=%2FHome%2FLanding"
          class="bg-red text-light no-underline uppercase font-semibold px-2"
          rel="noopener"
        >
          <!-- <svg-icon
            name="icon-question"
            title="newspaper icon"
            width="1em"
            height="1em"
          /> -->
          Enroll Now <span class="hidden lg:inline">for 2021</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
