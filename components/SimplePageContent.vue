<template>
  <div class="wrapper py-20 max-w-screen-lg">
    <p
      v-if="page.content.publishedAt"
      class="max-w-screen-lg mx-auto px-4 text-2xl mb-20 text-green font-semibold"
    >
      written on {{ page.content.publishedAt | formatDateYear }}
      <span v-if="page.content.authorName">
        by
        {{ page.content.authorName }}</span
      >
    </p>
    <SanityContent
      :blocks="page.content.body"
      :serializers="serializers"
      class="prose prose-xl max-w-screen-lg px-4"
    />
  </div>
</template>

<script>
import iframe from "@/components/serializers/iframe";

export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      serializers: {
        // marks: {
        //   link: externalLink
        // },
        // TODO: form serializer
        types: {
          iframeEmbed: iframe
        }
      }
    };
  }
};
</script>

<style></style>
