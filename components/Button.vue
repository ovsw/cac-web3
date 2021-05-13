<template>
  <component v-bind="linkProps(url)" class="button">
    <slot></slot> {{ cleanUrl(url) }}
    <svg-icon
      name="icon-chevron-right-light"
      title="chevron right icon"
      height="1em"
      width="1em"
    />
  </component>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    cleanUrl(url) {
      return url.replace(/\/\//g, "/");
    },
    linkProps(url) {
      if (url.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener"
        };
      }
      return {
        is: "router-link",
        to: this.cleanUrl(url)
      };
    }
  }
};
</script>

<style></style>
