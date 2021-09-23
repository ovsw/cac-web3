<<template>
  <section
    class="[ ctaSection ]  py-grd  my-grd bg-green text-light"
    data-theme-color="green"
    data-theme="dark"
  >
    <!-- <div class="[ ctaSection__color-overlay ] [ pinned ]"></div> -->

    <div class="[ wrapper ]">
      <div
        class="[ ctaSection__content ] [ pannel ] border-4 md:border-4 p-10 md:p-24 2xl:mx-grd relative"
      >
        <div class="ctaSection__leftColumn [ space-y-7 ] relative z-20">
          <h2 class="sectionMainHeading max-w-3xl">{{ section.title }}</h2>

          <div v-if="section.subtitle" class="ctaSection__subHeadingWrapper">
            <h3 class="subtitle">{{ section.subtitle }}</h3>
          </div>

          <div v-if="section.text" class="ctaSection__rteWrapper [ space-y-7 ]">
            <SanityContent
              :blocks="section.text"
              class="prose max-w-prose text-light text-lg"
            />
          </div>
        </div>

        <div
          v-if="section.button1"
          class="ctaSection__rightColumn mt-8 relative z-50"
        >
          <Button :url="section.button1.url" class="button--light">{{
            section.button1.text
          }}</Button>
        </div>

        <div
          v-if="section.image && section.image.asset"
          class="w-2/3 absolute top-0 right-0 h-full opacity-30 hidden lg:block"
        >
          <img
            :src="
              $urlFor(section.image)
                .width(800)
                .height(400)
            "
            class="absolute top-0 right-0 h-full w-full z-0 object-cover"
            alt="section.image.alt"
          />
          <div
            class="absolute top-0 left-0 right-0 h-full w-full z-10 bg-gradient-to-r to-transparent"
            :class="`from-green`"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
// .ctaSection {
//   position: relative;
//   margin: var(--grid-space) 0;
//   padding: var(--grid-space) 0;

//   &__image img {
//     // pinned

//     -webkit-filter: grayscale(100%);
//     -moz-filter: grayscale(100%);
//     -ms-filter: grayscale(100%);
//     -o-filter: grayscale(100%);
//     filter: gray;
//     z-index: 10;
//     opacity: 15%;
//   }
//   &__color-overlay {
//     z-index: 5;
//   }

//   &__content {
//     position: relative;
//     z-index: 20;

//     section[data-theme="dark"] & {
//       color: white;
//       border: 3px solid rgba($color: white, $alpha: 0.5);
//     }
//     section[data-theme="light"] & {
//       color: black;
//       border: 5px solid rgba(black, $alpha: 0.5);
//     }

//     > * + * {
//       margin-top: var(--flow-space);
//     }

//     @include media-query("lg") {
//       display: flex;
//       align-items: center;
//     }

//     h2,
//     h3 {
//       font-size: get-size("700");
//       @include media-query("md") {
//         font-size: get-size("800");
//       }
//     }

//     .subtitle {
//       @include media-query("lg") {
//         font-size: 28px !important;
//       }
//     }

//     a {
//       text-decoration-color: currentColor;
//     }
//   }

//   &__leftColumn {
//     flex: 2;
//     @include media-query("lg") {
//       padding-right: calc(var(--grid-space) * 2);
//     }
//   }

//   &__rightColumn {
//     flex: 0 1 auto;
//   }
// }

// .bigHeadingSection + .ctaSection {
//   margin-top: 0 !important;
// }
</style>
