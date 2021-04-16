<template>
  <div class="wrapper py-20 max-w-screen-xl">
    <SanityContent
      :blocks="page.content.body"
      class="prose text-lg max-w-screen-xl"
    />
  </div>
</template>

<script>
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
          iframeEmbed: () => "embedded form"
        }
      }
    };
  }
};
</script>

<style></style>
