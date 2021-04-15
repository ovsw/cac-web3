<template>
  <!-- TODO: social links are unfocusable -->
  <l-cluster wrapper="ul">
    <li>
      <a
        href="https://www.facebook.com/Canadian-Adventure-Camp-29598302267/"
        target="_blank"
        rel="noopener noreferrer"
        tabindex="-1"
      >
        <span class="visually-hidden">Facebook Page</span>
        <svg-icon
          name="icon-fb"
          title="Facebook icon"
          height="1em"
          width="1em"
        />
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/user"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <span class="visually-hidden">Youtube Channel</span>
        <svg-icon
          name="icon-youtube"
          title="YouTube icon"
          height="1em"
          width="1em"
        />
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/user/justingerson1?feature=watch"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <span class="visually-hidden">Instagram Page</span>
        <svg-icon
          name="icon-instagram"
          title="Instagram icon"
          height="1em"
          width="1em"
        />
      </a>
    </li>
  </l-cluster>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    wrapperClass: String
  }
};
</script>

<style></style>
