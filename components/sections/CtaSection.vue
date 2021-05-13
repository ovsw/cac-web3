<<template>
  <section
    class="[ ctaSection ]  p-grd my-grd bg-green text-light"
    data-theme-color="green"
    data-theme="dark"
  >
    <!-- <div class="[ ctaSection__color-overlay ] [ pinned ]"></div> -->

    <div class="[ wrapper ]">
      <div
        class="[ ctaSection__content ] [ pannel ] border-4 md:border-4 p-10 md:p-24 2xl:mx-grd "
      >
        <div class="ctaSection__leftColumn [ space-y-7 ]">
          <h2>{{ section.title }}</h2>

          <div v-if="section.subtitle" class="ctaSection__subHeadingWrapper">
            <h3 class="subtitle">{{ section.subtitle }}</h3>
          </div>

          <div v-if="section.text" class="ctaSection__rteWrapper [ space-y-7 ]">
            <SanityContent
              :blocks="section.text"
              class=" max-w-prose text-light text-lg"
            />
          </div>
        </div>

        <div v-if="section.buttons" class="ctaSection__rightColumn cluster-l">
          <div v-for="button in section.buttons">
            <a
              :href="`/${button.url}/`"
              class="[ button button--outline-light ]"
              >{{ button.text }}</a
            >
          </div>
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
