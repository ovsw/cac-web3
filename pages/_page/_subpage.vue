<template>
  <article>
    <page-header
      :title="page.content.title"
      :image="page.content.headerImage"
      :narrow="page._type == 'pageSimple' ? true : false"
    />

    <!-- if normal page, show content sections -->
    <template v-if="page._type == 'page'">
      <component
        v-for="section in page.content.sections"
        :is="getComponentFromSectionType(section._type)"
        :key="section._key"
        :section="section"
      />
    </template>

    <!-- if simple page, show body -->
    <template v-if="page._type == 'pageSimple'">
      <SimplePageContent :page="page" />
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
    // console.log("what is the current page slug?", `${params.page}/${params.subpage}`)
    // console.log("what is in the store.state?", store.state)
    // console.log("what is in store.state.pagesSlugs", store.state.pagesSlugs)
    // console.log("is the curent page slug found in the pageslug store?", store.state.pagesSlugs.includes(`${params.page}/${params.subpage}`))
    return (
      query.preview === "true" ||
      store.state.pagesSlugs.includes(`${params.page}/${params.subpage}`)
    );
  },

  asyncData({ $sanity, params, payload }) {
    const fullSlug = `${params.page}/${params.subpage}`;
    // console.log('params: ', fullSlug)
    if (payload) {
      return { page: payload };
    }
    // console.log('no payload, refetching')
    return $sanity.fetch(query, {
      slug: fullSlug
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
      } else if (sectionType == "bigHeading") {
        return "SectionsBigHeading";
      }
      return "SectionsDefault";
    }
  }
};
</script>
