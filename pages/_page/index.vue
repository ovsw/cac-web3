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
    }
  }
};
</script>
