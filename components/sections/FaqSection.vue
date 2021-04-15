<template>
  <section class="faqSection m-grd">
    <div class="[ wrapper ]">
      <div class="[ pannel border-green border-5 ]">
        <h2 class="faqSection__heading">{{ section.title }}</h2>

        <dl class="[ space-y-7 ]">
          <div
            v-for="(item, index) in section.faqItems"
            class="faqsWrapper"
            :key="index"
          >
            <dt>
              <button
                :id="'accordion' + sectionIndex + '-header-' + index"
                :aria-controls="'accordion' + sectionIndex + '-panel-' + index"
                @click="
                  index != selected ? (selected = index) : (selected = -1)
                "
                :aria-expanded="selected == index ? 'true' : 'false'"
              >
                {{ item.question }}
                <span>+</span>
              </button>
            </dt>

            <dd
              :id="'accordion' + sectionIndex + '-panel-' + index"
              :aria-labelledby="'accordion' + sectionIndex + '-header-' + index"
              v-show="selected == index"
            >
              <SanityContent :blocks="item.answer" />
            </dd>
          </div>
        </dl>
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
