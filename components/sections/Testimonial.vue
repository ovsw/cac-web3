<template>
  <div class="section my-grd">
    <BorderPanel>
      <h2 class="mt-4 mb-8 md:mb-10 text-center">{{ section.title }}</h2>

      <blockquote class="relative max-w-3xl mx-auto text-center text-xl">
        <span class="text-3xl w-6 inline-block"></span>
        <svg
          class="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-10 w-10 text-green opacity-50"
          stroke="none"
          fill="currentColor"
          viewBox="0 0 144 144"
          aria-hidden="true"
        >
          <path
            stroke-width="8"
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
          ></path>
        </svg>
        {{ section.testimonial.text }}

        <footer class="mt-4 text-center">
          <div>
            <div class="ml-4 lg:ml-0">
              <span class="text-base font-medium text-gray-900">
                {{ section.testimonial.author }}
              </span>
              /
              <span class="text-base font-medium text-green">
                Parent
              </span>
            </div>
          </div>
        </footer>
      </blockquote>
    </BorderPanel>
  </div>
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

<style lang="scss" scoped></style>
