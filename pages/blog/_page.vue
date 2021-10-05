<template>
  <article>
    <PageHeader
      :title="page.content.title"
      :image="page.content.image"
      :narrow="true"
    />

    <SimplePageContent :page="page" />
  </article>
</template>

<script>
import externalLink from "@/components/serializers/externalLink";

const query = /* groq */ `{ "page": *[_type == 'post' && content.slug.current == $slug]
  {
    ...,
    "ogImageUrl": content.image.asset->url,
    content {
      ...,
      "authorName": author->name
    }
  } | order(_updatedAt desc)[0]}`;

export default {
  name: "NewsItemPage",

  validate({ params, store, query }) {
    // console.log('params:', params)
    // If FALSE redirect to 404 page
    return (
      query.preview === "true" || store.state.newsSlugs.includes(params.page)
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
      return `${this.page.ogImageUrl}?w=1200&h=627&auto=format`;
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

  /* Possible implementation of real-time preview. Requires @sanity/client.
  mounted() {
    if (this.$route.query.preview)
      this.$sanity
        .listen('*[_type == "movie" && slug.current == $slug][0] | order(_updatedAt desc)[0]', {
          slug: this.$route.params.slug,
        })
        .subscribe(async (update) => {
          // Doesn't work for references
          // this.movie = update.result
          // this.$nuxt.refresh()
          try {
            this.movie = await this.$sanity.fetch(
              "*[_type == 'movie' && slug.current == $slug][0]",
              {
                slug: this.$route.params.slug,
              }
            )
          } catch (error) {
            console.error(error)
          }
        })
  }, */
};
</script>
