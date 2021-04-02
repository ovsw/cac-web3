<template>
  <div>
    <component :is="'style'" v-if="image">
      .page-header[data-id="12312321"] {
        background-image: url('{{
          $urlFor(image)
          .width(600)
          .height(400)
          }}')!important;
        }
      @media screen and (min-width: 600px) {
        .page-header[data-id="12312321"] {
          background-image: url('{{
            $urlFor(image)
            .width(1200)
            .height(800)
            }}')!important;
        }
      }
      @media screen and (min-width: 1200px) {
        .page-header[data-id="12312321"] {
          background-image: url('{{
            $urlFor(image)
            .width(1600)
            .height(700)
            }}')!important;
        }
      }
    </component>

    <!-- <div class="foo" >
      <div class="bar">1111111111111111111111111</div>
    </div> -->
    <div class="[ page-header ]" :id="12312321" :data-id="12312321">
      <div class="[ wrapper ]">
        <div class="page-header__content">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      default: "Missing Title"
    },
    image: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  background-size: cover;
  background-attachment: fixed;
  padding-top: 250px;
  position: relative;

  margin-bottom: var(--grid-space);

  @include media-query("md") {
    padding-top: 39rem;
  }

  &__content {
    display: inline-block;
    background-color: get-color("light-shade");
    border-radius: 0 50px 0 0;

    padding: get-size("600") get-size("600");
    padding-right: get-size("xl");

    @include media-query("md") {
      padding: get-size("800") get-size("800");
    }

    @include media-query("lg") {
    }

    h1 {
      font-size: get-size("600");
      display: inline-block;

      @include media-query("md") {
        font-size: get-size("800");
      }
    }
  }

  background-position: center center;
  // background-image: url("https://cdn.sanity.io/images/lwnx6aqb/production/192addb25424b75a86ef70b629971457e081c9a0-1200x794.jpg?fit=crop&w=1600&h=500");

  &::before {
    background-color: #000;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
  // &::before {
  //   background-color: rgb(131,187,65);
  //   content: '';
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   mix-blend-mode: darken;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }

  // &::after {
  //   background-color: rgb(34,48,19);
  //   content: '';
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   mix-blend-mode: lighten;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom:0;
  // }
}

.narrow .wrapper {
  @include media-query("lg") {
    max-width: 1000px !important;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
