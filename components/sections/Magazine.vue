<template>
  <section
    class="[ magSection ] 
    wrapper 
    my-grd
    lg:flex
    "
    data-theme="frame"
    data-theme-color="green"
  >
    <div class="[ magSection__image ] relative flex-1 2xl:ml-grd">
      <!-- FIXME: images look like shit -->
      <img
        class="object-cover w-full h-full"
        :src="
          $urlFor(section.image)
            .width(800)
            .height(800)
        "
        :alt="section.image.alt"
      />
      <!-- 
        :srcset="
          $urlFor(section.image)
            .width(400)
            .height(300) +
            ' 400w, ' +
            $urlFor(section.image)
              .width(928)
              .height(300) +
            ' 928w, ' +
            $urlFor(section.image)
              .width(200)
              .height(500) +
            ' 200w, ' +
            $urlFor(section.image)
              .width(928)
              .height(500) +
            ' 928w, ' +
            $urlFor(section.image)
              .width(1600)
              .height(1000) +
            ' 1600w, ' +
            $urlFor(section.image)
              .width(2500)
              .height(1500) +
            ' 2500w'
        "
        sizes="
          (min-width: 1500px) 860px,
          100vw
        " -->

      <client-only v-if="section.video">
        <silent-box
          class="playIcon "
          :image="{
            src: section.video,
            description: section.title
          }"
        >
          <template v-slot:silentbox-item="{}">
            <span class="w-full h-full block">
              <svg-icon
                name="icon-play"
                title="play icon"
                height="10em"
                width="10em"
              />
            </span>
            <span class="visually-hidden"
              >play video about {{ section.title }}</span
            >
          </template>
        </silent-box>
      </client-only>
    </div>

    <div
      class="[ magSection__content ] 
        flex-1
        border-4 border-green

        my-grd px-6 py-12 space-y-6

        md:border-5 md:p-10 lg:ml-grd
        
        lg:max-w-2xl lg:p-20 lg:my-0 lg:py-40 
        
        2xl:mr-grd
        "
    >
      <div class="space-y-7">
        <h2 class="sectionMainHeading">{{ section.title }}</h2>

        <div class="magSection__subHeadingWrapper">
          <h3 class="[ subtitle ]">{{ section.subtitle }}</h3>
        </div>

        <div class="magSection__rteWrapper [  ]">
          <SanityContent
            :blocks="section.text"
            :serializers="serializers"
            class="prose text-lg"
          />
        </div>
      </div>
      <div v-if="sectionButtons" class="magSection__buttonWrapper">
        <l-cluster>
          <Button
            v-for="(button, index) in sectionButtons"
            :url="`/${button.url}/` || '#'"
            :key="index"
          >
            {{ button.text }}
          </Button>
        </l-cluster>
      </div>
    </div>
  </section>
</template>

<script>
import externalLink from "@/components/serializers/externalLink";

export default {
  name: "MagSection",
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  computed: {
    sectionButtons() {
      return this.section.button1 || [];
      // const sectionButtonsArr = this.section.button1;
      // const filteredSectionButtonsArr = sectionButtonsArr
      //   ? sectionButtonsArr.filter(button => button.text && button.url)
      //   : [];
      // return filteredSectionButtonsArr;
    }
  },
  data() {
    return {
      serializers: {
        marks: {
          link: externalLink
        }
      }
    };
  }
};
</script>

<style lang="scss">
.playIcon {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  color: white;
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(black, $alpha: 0.4);
  transition: all 0.5s;
  cursor: pointer;

  & svg {
    width: 200px;
    height: 200px;
    transition: all 0.5s;
  }

  & a {
    width: 100%;
    height: 100%;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & a:focus {
    outline: 2px dashed white;
  }

  &:hover {
    background-color: rgba($color: #527033, $alpha: 0.8);
    svg {
      transform: scale(1.1);
    }
  }
}

// $sectionColors: (
//   "green": green,
//   "blue": get-color("secondary"),
//   "red": get-color("accent"),
//   "yellow": get-color("tertiary")
// );

// .magSection {
//   padding: 0 !important;
//   margin-top: var(--grid-space);
//   margin-bottom: var(--grid-space);

//   display: flex;
//   flex-wrap: wrap;

//   @media screen and (min-width: 50rem) {
//     flex-wrap: nowrap;
//   }

//   // GENERATE SECTION COLORS
//   @each $name, $color in $sectionColors {
//     &[data-theme-color="#{$name}"] {
//       .magSection__content {
//         border-color: $color !important;
//       }
//     }
//     &[data-theme="fill"][data-theme-color="#{$name}"] {
//       .magSection__content {
//         background-color: $color;
//         color: white;
//       }
//     }
//     &[data-theme="fill"][data-theme-color="yellow"] {
//       .magSection__content {
//         background-color: $color;
//         color: get-color("dark");
//       }
//     }
//   }

//   &__image {
//     flex: 1 1 60%;
//     min-height: 18.75rem;
//     margin-left: var(--grid-space);
//     margin-right: var(--grid-space);
//     margin-bottom: var(--grid-space);
//     position: relative;

//     @media screen and (min-width: 50rem) {
//       margin: 0;
//       min-height: 28.75rem;
//     }
//     @media screen and (min-width: 1600px) {
//       margin-left: var(--grid-space);
//     }

//     img {
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }

//   &__content {
//     margin: 0 var(--grid-space);
//     font-size: 1.125rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     flex-basis: 100%;

//     @media screen and (min-width: 1200px) {
//       flex-basis: 40%;
//     }

//     h2 {
//       font-size: get-size("600");
//       text-transform: uppercase;

//       // @include media-query('md') {
//       //   font-size: get-size('700');
//       // }
//     }
//   }
//   &__playIcon {
//     position: absolute;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     z-index: 100;
//     font-size: 100px;
//     color: white;
//     fill: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(black, $alpha: 0.5);
//     transition: all 0.5s;
//     cursor: pointer;

//     & svg {
//       width: 200px;
//       height: 200px;
//       transition: all 0.5s;
//     }

//     &:hover {
//       background-color: rgba($color: green, $alpha: 0.8);
//       svg {
//         transform: scale(1.1);
//       }
//     }
//   }
// }

// // alternate order of elements for consecutive sections

// .magSection:nth-child(even) {
//   flex-direction: row-reverse;
//   .magSection__image {
//     @media screen and (min-width: 1600px) {
//       margin-left: 0 !important;
//       margin-right: var(--grid-space) !important;
//     }
//   }
// }
</style>
