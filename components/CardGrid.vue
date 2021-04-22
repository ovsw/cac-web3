<template>
  <li
    class="card  bg-white transition-transform flex flex-col shadow-md rounded-tr-3xl relative hover:shadow-lg"
  >
    <div class="order-2 p-4 flex-1 flex flex-col">
      <component
        :is="`h${headingLvl}`"
        class="text-lg normal-case font-body font-normal"
      >
        <NuxtLink
          :to="url"
          class="cardLink"
          aria-describedby="${title}-ride` | slugify"
        >
          <span class="block text-xl font-bold  mb-4">
            {{ title }}
          </span>

          <span class="flex space-x-2 items-baseline">
            <span v-if="date" class="pill text-gray-500 mb-4 text-base">
              {{ date | formatDateYear }}
            </span>
            <template v-if="tags.length">
              <span
                v-for="(tag, index) in tags"
                :key="index"
                :class="tagColor(tag)"
                class="pill"
                >{{ tagText(tag) }}</span
              >
            </template>
          </span>
        </NuxtLink>
      </component>

      <p v-if="description" class=" text-muted mb-4">
        {{ description }}
      </p>
      <p
        class="underline font-bold mt-auto mt-auto"
        aria-hidden="true"
        :id="`${title}-ride` | slugify"
      >
        read more
      </p>
    </div>
    <img
      :src="
        $urlFor(image)
          .width(400)
          .height(300)
      "
      :alt="image.alt"
      class="order-1 rounded-tr-3xl"
    />
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "missing title"
    },
    headingLvl: {
      type: String,
      default: "3"
    },
    tags: {
      type: Array,
      default: () => []
    },
    image: {
      type: Object
    },
    description: {
      type: String
    },
    date: {
      type: String
    },
    url: {
      type: String,
      default: "/"
    }
  },
  methods: {
    tagColor(tag) {
      if (["Thrill Ride", "food"].includes(tag)) {
        return "bg-red text-light";
      } else if (["Family Ride", "free"].includes(tag)) {
        return "bg-yellow text-dark";
      } else if (["Kiddie Ride", "park"].includes(tag)) {
        return "bg-green text-light";
      } else if (["music"].includes(tag)) {
        return "bg-blue text-light";
      }

      return "";
    },
    tagText(tag) {
      if (tag == "free") {
        return "free entry";
      }
      return tag;
    }
  }
};
</script>

<style lang="scss" scoped>
.cardLink::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.cardLink:focus {
  outline: none !important;
}
.card:focus-within {
  // box-shadow: 0 0 0 0.25rem #10722d;
  outline: 2px dashed green;
  outline-offset: 0.5rem;
  transform: scale(1.03);
}
.card:hover {
  transform: scale(1.03);
}
</style>
