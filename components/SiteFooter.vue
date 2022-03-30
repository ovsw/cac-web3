<template>
  <footer class="footer bg-green text-light pt-20">
    <div class="container mx-auto px-4 md:px-6 pb-10">
      <div
        class="footer__grid space-y-7 md:grid gap-5 md:grid-cols-3 lg:grid-cols-5 md:space-y-0 "
      >
        <div
          class="footer__logos flex space-x-6 items-center  col-span-1 lg:col-span-2 self-center"
        >
          <a href="https://ontariocampsassociation.ca/" rel="noopener">
            <img
              class=" w-32"
              height="100"
              src="~/assets/images/logos/ontario-camp-association-accredited-member-badge.png"
              alt="Ontario Camp Association Accredited Member Badge"
            />
          </a>
          <a href="https://www.amicicharity.org/" rel="noopener">
            <img
              class="w-32"
              height="100"
              src="~/assets/images/logos/amici-camping-charity-logo.png"
              alt="Amici Camping Charity"
            />
          </a>
        </div>

        <!-- phone -->
        <div class="footer__phone self-center lg:col-span-2">
          <a href="tel:905-886-1406"
            ><span class="uppercase tracking-wider">Call us</span>
            <br />
            <span class="text-3xl">905-886-1406</span></a
          >
        </div>
        <!-- social -->
        <ul class="footer__social-wrapper text-4xl self-center text-center">
          <SocialLinks />
        </ul>

        <div
          class="footer__address footer__address space-y-3 md:col-span-2 py-6 text-light"
        >
          <p class="text-2xl font-semibold ">Canadian Adventure Camp</p>
          <p>
            Canada's Premiere International coed overnight camp, located on a
            private island in Temegami. We provide acclaimed programs for
            children all around the world.
          </p>
          <p>
            <a href="mailto:info@canadianadventurecamp.com"
              >info@canadianadventurecamp.com</a
            >
          </p>
          <p>
            6 Hubner Drive, Richmond Hill, <br />
            Ontario, L4E 4W5, Canada
          </p>
        </div>

        <div class="footer__col col1">
          <h4>Programs</h4>
          <ul>
            <li>
              <NuxtLink to="/programs/general-camp-program/"
                >General Program</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/programs/specialty-summer-camp-programs/"
                >Specialty Programs</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/all-new-youth-leadership-program/"
                >Youth Leadership Program</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/dates-and-rates/">Date &amp; Rates</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/nccp-courses-and-adult-camp/"
                >NCCP &amp; Adult Camp</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="footer__col col2">
          <h4>About</h4>
          <ul>
            <li><NuxtLink to="/join-our-team/">Join Our Team</NuxtLink></li>
            <!-- <li>
              <NuxtLink to="/staff/community-initiatives/"
                >Community Initiatives</NuxtLink
              >
            </li> -->
            <li>
              <NuxtLink to="/our-summer-camp-history-and-goal/"
                >History</NuxtLink
              >
            </li>
            <li><NuxtLink to="/contact/">Contact Us</NuxtLink></li>
          </ul>
        </div>

        <div class="footer__col col3">
          <h4>Legal</h4>
          <ul>
            <li><NuxtLink to="/privacy-policy/">Privacy Policy</NuxtLink></li>
            <li>
              <NuxtLink to="/terms-and-conditions/"
                >Terms &amp; Conditions</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/website-accessibility-policy/"
                >Website Accessibility Policy</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__bottom bg-green-dark p-4 md:text-center text-sm">
      <p>
        ©2014-{{ getCurrentYear() }} Canadian Adventure Camp, Inc. All Rights
        Reserved. | Website by:
        <a
          href="https://studiorovst.com"
          target="_blank"
          rel="noopener noreferrer"
          >Studio Rovst</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer a:focus {
  outline: 2px dashed white !important;
}
</style>
