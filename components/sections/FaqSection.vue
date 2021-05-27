<template>
  <section class="faqSection m-grd">
    <div class="[ wrapper ]">
      <div class="[ pannel border-green border-5 space-y-10 ]">
        <h2 class="faqSection__heading">{{ section.title }}</h2>

        <div
          v-for="(item, index) in section.faqItems"
          class="faqsWrapper"
          :key="index"
        >
          <h3 class="text-xl">
            <button
              :id="'accordion' + sectionIndex + '-header-' + index"
              :aria-controls="'accordion' + sectionIndex + '-panel-' + index"
              @click="index != selected ? (selected = index) : (selected = -1)"
              :aria-expanded="selected == index ? 'true' : 'false'"
              class="bg-green text-light-light p-6 pt-8 block w-full text-left focus:outline-green-large"
            >
              {{ item.question }}
              <span class="float-right text-2xl">
                <svg
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  focusable="false"
                  class="w-6 h-6 text-current fill-current"
                >
                  <rect class="vert" height="9" width="1" y="1" x="4" rx="1" />
                  <rect height="1" width="9" y="5" x="0" rx="1" />
                </svg>
              </span>
            </button>
          </h3>

          <dd
            :id="'accordion' + sectionIndex + '-panel-' + index"
            :aria-labelledby="'accordion' + sectionIndex + '-header-' + index"
            v-show="selected == index"
            class="p-6 lg:pt-8 bg-light-dark"
          >
            <SanityContent
              :blocks="item.answer"
              class="prose prose-lg max-w-full"
            />
          </dd>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    section: {
      type: Object
    },
    sectionIndex: {
      type: Number
    }
  },
  data() {
    return {
      selected: -1
    };
  }
};
</script>

<style lang="scss" scoped>
[aria-expanded="true"] .vert {
  display: none;
}
// .faqSection {
//   h3 {
//     margin-top: get-size("800");
//     margin-bottom: get-size("600");
//   }

//   dt {
//     display: block;
//   }

//   dt button {
//     cursor: pointer;
//     background: green;
//     border: none;
//     color: white;
//     padding: get-size("400") get-size("600");
//     padding-top: calc(#{get-size("400")} * 1.3);

//     display: block !important;
//     width: 100%;
//     text-align: left;

//     span {
//       float: right;
//     }
//   }
// }

// .faqSection__heading {
//   margin-bottom: get-size("700");
// }
</style>
