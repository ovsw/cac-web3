<template>
  <article>
    <page-header
      :title="page.content.title"
      :image="pageHeaderImage"
      :narrow="page._type == 'pageSimple' ? true : false"
    />
    <!-- if normal page, show content sections -->
    <template v-if="page._type == 'page'">
      <SectionsRenderer :sections="page.content.sections" />
    </template>

    <!-- if simple page, show body -->
    <template v-if="page._type == 'pageSimple'">
      <SimplePageContent :page="page" />
    </template>
  </article>
</template>

<script>
import externalLink from "@/components/serializers/externalLink";

const query = /* groq */ `{ "page": *[(_type == 'page' || _type == 'pageSimple') && content.slug.current == $slug] {
  ...,
  "ogImageUrl": content.headerImage.asset->url,
  "ogImageUrlSimple": content.image.asset->url,
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
} | order(_updatedAt desc)[0]}`;

export default {
  name: "Page",
  validate({ params, store, query }) {
    // console.log('params:', params)
    // If FALSE redirect to 404 page
    return (
      query.preview === "true" || store.state.pagesSlugs.includes(params.page)
    );
  },

  asyncData({ $sanity, params, payload }) {
    if (payload) {
      return { page: payload };
    }
    return $sanity.fetch(query, {
      slug: params.page
    });
  },

  data() {
    return {
      serializers: {
        marks: {
          link: externalLink
        }
      }
    };
  },

  computed: {
    pageHeaderImage() {
      return this.page._type == "pageSimple"
        ? this.page.content.image
        : this.page.content.headerImage;
    },

    seoTitle() {
      if (this.page.content.seo && this.page.content.seo.title) {
        return `${this.page.content.seo.title} | Canadian Adventure Camp`;
      } else if (this.page.content.title) {
        return `${this.page.content.title} | Canadian Adventure Camp`;
      }
      return undefined;
    },
    seoDescription() {
      if (this.page.content.seo && this.page.content.seo.description)
        return this.page.content.seo.description;
      // .replace(
      //   /^(.{150}[^\s]*).*/,
      //   "$1"
      // );
      return undefined;
    },
    seoShareImage() {
      return this.page._type == "pageSimple"
        ? `${this.page.ogImageUrlSimple}?w=1200&h=627&auto=format`
        : `${this.page.ogImageUrl}?w=1200&h=627&auto=format`;
    },
    seoPageUrl() {
      return `https://www.canadianadventurecamp.com/blog/${this.page.content.slug.current}/`;
    }
  },

  head() {
    return {
      title: this.seoTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seoDescription
        },
        {
          hid: "ogtitle",
          name: "og:title",
          content: this.seoTitle
        },
        {
          hid: "ogdescription",
          name: "og:description",
          content: this.seoDescription
        },
        {
          hid: "ogimage",
          name: "og:image",
          content: this.seoShareImage
        },
        {
          hid: "ogurl",
          name: "og:url",
          content: this.seoPageUrl
        }
      ],
      link: [{ rel: "canonical", href: this.seoPageUrl }],
      __dangerouslyDisableSanitizersByTagID: {
        ogimage: ["content"]
      }
    };
  }
};
</script>
