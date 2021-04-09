<template>
  <div
    class="alert text-sm py-2 bg-green-dark text-center text-yellow-light relative"
  >
    <!-- x-data="{ alertvisible: true }"
      x-show.transition="alertvisible" -->
    <div class="wrapper">
      <div class="alert__inner">
        <p>
          <a href="#">Alert Text Here - Read our latest COVID Updates</a>
        </p>
        <button>Dismiss</button>
        <!--  @click="alertvisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.alert {
  z-index: 100;

  & p {
    display: inline-block;

    & a {
      text-decoration-color: #ffe000;
      &:focus {
        outline-color: white;
      }
    }
  }

  & button {
    margin-left: auto;
    background-color: get-color("primary");
    border: none;
    color: get-color("light");
    display: inline-block;
    margin-left: get-size("400");
    &:focus {
      outline-color: white;
    }
  }
}
</style>
