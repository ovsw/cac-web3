<template>
  <article>
    <page-header
      :title="page.content.title"
      :image="page.content.headerImage"
    />
    <!-- if normal page, show content sections -->
    <!-- <template v-if="page._type == 'page'"> -->
    <component
      v-for="(section, index) in page.content.sections"
      :is="getComponentFromSectionType(section._type)"
      :key="index"
      :section="section"
    />
    <!-- </template> -->

    <!-- if simple page, show body -->
    <!-- <template v-if="page._type == 'pageSimple'">
      <p>simple page</p>
    </template> -->
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

  methods: {
    getComponentFromSectionType(sectionType) {
      if (sectionType == "magSection") {
        return "SectionsMagazine";
      } else if (sectionType == "faqSection") {
        return "SectionsFaqSection";
      } else if (sectionType == "ctaSection") {
        return "SectionsCtaSection";
      }
    }
  }
};
</script>
