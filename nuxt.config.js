import { createClient } from "@nuxtjs/sanity";
import fetch from "node-fetch";
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

const configSanity = {
  projectId: "lwnx6aqb",
  useCdn: false,
  minimal: true,
  dataset: "production"
  // token: process.env.NODE_ENV == "development" ? process.env.SANITY_READ_TOKEN : ''
  // withCredentials: process.env.NODE_ENV == "development" ? true : "false"
};
const client = createClient(configSanity);

const seoTitle =
  "Ontario Overnight Summer Camp for Kids | Canadian Adventure Camp";
const seoDescription =
  "Canadian Adventure Camp is a coed overnight summer camp for kids located on a beautiful private island in the wilderness lakes region of Temagami in Ontario Canada.";
const seoSocialShareImage =
  "/delgrosso-amusement-park-laguna-splash-default-social-image.jpg";

export default {
  privateRuntimeConfig: {
    sanity: {
      token: process.env.SANITY_READ_TOKEN
    }
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Canadian Adventure Camp",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: seoDescription
      },
      {
        hid: "ogtitle",
        name: "og:title",
        content: seoTitle
      },
      {
        hid: "ogdescription",
        name: "og:description",
        content: seoDescription
      },
      {
        hid: "msTitleColor",
        name: "msapplication-TileColor",
        content: "#ece7d7"
      },
      {
        hid: "theme-color",
        name: "msapplication-TileColor",
        content: "#ffffff"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "32x32",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#576f37" }
      // { rel: "canonical", href: seoCannonicalUrl }
    ]
  },

  tailwindcss: {
    jit: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/filters.js",
    "~plugins/sanity.js",
    "~plugins/preview.client.js",
    "~plugins/image-builder.js",
    "~/plugins/to-link.js",
    "~/plugins/lightbox.client.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/svg-sprite",
    "@nuxtjs/style-resources",
    "@nuxtjs/sanity/module",
    "@nuxtjs/google-analytics"
  ],

  googleFonts: {
    display: "swap",
    download: true,
    overwriting: false,
    families: {
      "Open+Sans": {
        wght: [400, 600],
        ital: [400]
      },
      Raleway: {
        wght: [900]
      }
    }
  },

  styleResources: {
    // your settings here
    scss: ["assets/scss/_gorko.scss"]
    // TODO: remove gorko config scss
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // GENERATE DYNAMIC PAGES FROM SANITY
  generate: {
    //subFolders: false,
    fallback: true,
    crawler: false,
    async routes() {
      const pages = await client.fetch(/* groq */ `*[_type == "page"] {
        ...,
        content {
          ...,
          sections[] {
              ...,
              _type == 'faqSection' => {
                ...,
                faqItems[]->{
                  ...
                }
              },
              _type == 'testimonialsSection' => {
                ...,
                testimonialsList[]->{
                  ...
                }
              },
              _type == 'testimonialSection' => {
                ...,
                testimonial->{
                  ...
                }
              },
              reusableSection->{
                ...
              }
            }
        }
      }`);
      const posts = await client.fetch(/* groq */ `*[_type == "post"]{
        ...,
        content {
          ...,
          "authorName": author->name
        }
      }`);
      const pagesSimple = await client.fetch(`*[_type == "pageSimple"]`);

      return [
        ...pages.map(page => {
          // console.log('creting route for: ', `/${page.content.slug.current}/`)
          return {
            route: `/${page.content.slug.current}/`,
            payload: page
          };
        }),
        ...posts.map(page => {
          // console.log('creting route for: ', `/news/${page.content.slug.current}/`)
          return {
            route: `/blog/${page.content.slug.current}/`,
            payload: page
          };
        }),
        ...pagesSimple.map(page => {
          // console.log('creting route for: ', `/${page.content.slug.current}/`)
          return {
            route: `/${page.content.slug.current}/`,
            payload: page
          };
        })
      ];
    }
  },

  router: {
    trailingSlash: true
  },

  sanity: {
    ...configSanity,
    withCredentials: true
  },

  googleAnalytics: {
    // Options
    id: "UA-46855288-1"
  }
};
