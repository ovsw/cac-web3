<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__grid [ flow ]">
        <div class="footer__logos">
          <img
            height="100"
            src="~/assets/images/logos/ontario-camp-association-accredited-member-badge.png"
            alt="Ontario Camp Association Accredited Member Badge"
          />
          <img
            height="100"
            src="~/assets/images/logos/amici-camping-charity-logo.png"
            alt="Amici Camping Charity"
          />
        </div>

        <SocialLinks wrapperClass="footer__social-wrapper" />

        <div class="footer__phone">
          <a href="tel:1-800-966-1406"
            ><span>Call us</span><br /><span>1 (800) 966-1406</span></a
          >
        </div>

        <div class="footer__address [ flow ]">
          <p class="text-600">Canadian Adventure Camp</p>
          <p>[SEO text here]</p>
          <p>
            <a href="mailto:info@canadianadventurecamp.com"
              >info@canadianadventurecamp.com</a
            >
          </p>
          <p>
            15 Idleswift Drive Thornhill, <br />
            Ontario, L4J 1K9 Canada
          </p>
        </div>

        <div class="footer__col col1">
          <h4>Programs</h4>
          <ul>
            <li>
              <NuxtLink to="/programs/general-camp-program/"
                >General Program</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/programs/specialty-summer-camp-programs/"
                >Specialty Programs</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/all-new-youth-leadership-program/"
                >Youth Leadership Program</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/dates-and-rates/">Date &amp; Rates</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/nccp-courses-and-adult-camp/"
                >NCCP &amp; Adult Camp</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="footer__col col2">
          <h4>About</h4>
          <ul>
            <li><NuxtLink to="/join-our-team/">Join Our Team</NuxtLink></li>
            <li>
              <NuxtLink to="/staff/community-initiatives/"
                >Community Initiatives</NuxtLink
              >
            </li>
            <li><NuxtLink to="/history/">History</NuxtLink></li>
            <li><NuxtLink to="/contact/">Contact Us</NuxtLink></li>
          </ul>
        </div>

        <div class="footer__col col3">
          <h4>Legal</h4>
          <ul>
            <li><NuxtLink to="/privacy-policy/">Privacy Policy</NuxtLink></li>
            <li>
              <NuxtLink to="/terms-and-conditions/"
                >Terms &amp; Conditions</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/accessibility-statement/"
                >Accessibility Statement</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/accessibility-policy/"
                >Accessibility Policy</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="wrapper footer__bottom-content">
        <p>
          ©2014-2021 Canadian Adventure Camp, Inc. All Rights Reserved. |
          Website by:
          <a
            href="https://studiorovst.com"
            target="_blank"
            rel="noopener noreferrer"
            >Studio Rovst</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding-top: get-size("900");
  color: get-color("light-glare");
  font-size: get-size("400");
  background-color: get-color("primary-shade");

  & a {
    text-decoration-color: get-color("light") !important;
    color: get-color("light") !important;
    &:focus {
      outline: 2px dashed get-color("light") !important;
    }
  }

  &__grid {
    @include media-query("md") {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: var(--flow-space);
      padding-left: 1.875rem;
    }

    @include media-query("lg") {
      padding-left: 0;
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      grid-template-rows: min-content min-content;
      gap: var(--flow-space);
      grid-template-areas:
        "logos social social phone"
        "address nav1 nav2 nav3";
    }
  }

  p {
    color: get-color("light-glare");
  }

  &__logos {
    display: flex;
    align-items: center;

    & img:first-child {
      margin-right: get-size("400");
    }

    @include media-query("md") {
      grid-row: 1;
      grid-column: 1 / span 2;
      & img:first-child {
        margin-right: get-size("800");
      }
    }
  }

  &__address {
    @include media-query("md") {
      grid-row: 2;
      grid-column: 1 / span 1;
    }

    @include media-query("lg") {
      grid-area: address;
    }

    p {
      @include media-query("md") {
        max-width: 20rem;
      }
    }
  }

  &__social-wrapper {
    padding-top: get-size("600") !important;
    display: flex;
    align-items: center;

    @include media-query("md") {
      grid-row: 2;
      grid-column: 3;
    }

    @include media-query("lg") {
      grid-area: social;
    }

    li {
      padding-inline-end: get-size("400");
    }

    li:hover {
      transform: scale(1.1);
      transition: 0.1s;
    }

    a {
      font-size: get-size("700");
      color: get-color("light-glare");
      display: block;

      svg {
        display: block;
      }
    }
  }

  &__phone {
    @include media-query("md") {
      margin-top: 0 !important;
    }

    br {
      display: none;
      @include media-query("md") {
        display: inline;
      }
    }

    & span:first-child {
      margin-right: get-size("400");
    }

    & span:nth-child(3) {
      @include media-query("md") {
        font-size: get-size("600") !important;
      }
    }
  }

  &__col {
    h4 {
      @extend .font-base;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-top: get-size("400");
    }

    li {
      margin-top: get-size("200");
    }

    > div {
      margin-top: get-size("600");
    }
  }

  &__bottom {
    padding: get-size("500") 0;
    margin-top: get-size("600");
    background-color: get-color("primary");
    font-size: get-size("330");

    @include media-query("md") {
      margin-top: get-size("xl");
    }

    &-content {
      @include media-query("md") {
        text-align: center;
      }
    }

    & .signature {
      margin-top: get-size("400");
      @include media-query("md") {
        margin-top: 0;
      }
    }
  }
}
</style>
