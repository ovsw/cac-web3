<template>
  <component v-bind="linkProps(url)" class="button">
    <slot></slot>
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
      if (
        url.match(/((mailto:\w+)|(tel:\w+)|(http:\/\/\w+)|(https:\/\/\w+)).+/)
      ) {
        if (url)
          return {
            is: "a",
            href: url,
            target: "_blank",
            rel: "noopener"
          };
      }

      let routerLinkDestination = `/${url}/`;
      return {
        is: "router-link",
        to: this.cleanUrl(routerLinkDestination)
      };
    }
  }
};
</script>

<style></style>
