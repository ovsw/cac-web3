<template>
  <article>
    
    <page-header
      :title="page.content.title"
      :image="page.content.headerImage"
    />

    <template v-for="(section, index) in page.content.sections">
      <sections-magazine-section v-if="section._type == 'magSection'" :key="section._key" :section="section" />
      <sections-cta-section v-else-if="section._type == 'ctaSection'" :key="section._key" :section="section" />
      <sections-faq-section v-else-if="section._type == 'faqSection'" :key="section._key" :section="section" :sectionIndex="index"/>
    </template>

  </article>
</template>

<script>
import externalLink from "@/components/serializers/externalLink";

const query = /* groq */ `{ "page": *[_type == 'page' && content.slug.current == $slug] {
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
  }
};
</script>
