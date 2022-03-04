<template>
  <!-- TODO: social links are unfocusable -->
  <l-cluster wrapper="ul">
    <li>
      <a
        href="https://m.facebook.com/profile.php?id=100041520404874&_rdr"
        target="_blank"
        rel="noopener noreferrer"
        tabindex="-1"
      >
        <span class="visually-hidden">Our Facebook Page</span>
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
        href="https://www.youtube.com/channel/UC3FXdzbL2h495KjrUWSpRtA"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <span class="visually-hidden">Our Youtube Channel</span>
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
        href="https://www.instagram.com/canadian_adventure_camp/?hl=en"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <span class="visually-hidden">Our Instagram Page</span>
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
