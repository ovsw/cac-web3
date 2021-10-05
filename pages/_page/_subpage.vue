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

const query = /* groq */ `{ "page": *[_type == 'page' && content.slug.current == $slug] {
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
