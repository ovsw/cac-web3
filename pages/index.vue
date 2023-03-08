<template>
  <div>
    <Hero
      eyebrow="Welcome to"
      title="Canadian Adventure Camp"
      subtitle="Discover an overnight summer camp for all children, located on a beautiful private island in the wilderness lakes region of Temagami, that provides acclaimed programs to campers from around the world!" 
      :image="siteHome.content.hero.image"
      buttonText="Our Programs"
    />

    <SectionsRenderer :sections="siteHome.content.sections" />

    <section class="py-12">
      <div class="container mx-auto">
        <h2>From the CAC Blog</h2>
        <CardGridWrapper>
          <CardGrid
            v-for="post in posts"
            :key="post._key"
            :title="post.content.title"
            :date="post.content.publishedAt"
            :image="post.content.image ? post.content.image : {}"
            :description="post.content.excerpt"
            headingLvl="2"
            :author="post.content.authorName"
            :url="`/blog/${post.content.slug.current}/`"
          />
        </CardGridWrapper>
      </div>
    </section>
  </div>
</template>

<script>
const query = /* groq */ `{
  "posts": *[_type == 'post' && (content.publishedAt < now())] {
    ...,
    content {
      ...,
      "authorName": author->name
    }
  }[0...4] | order(content.publishedAt desc),
  "siteHome": *[_type == 'siteHome'] {
    ...,
    "ogImageUrl": content.hero.image.asset->url,
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
  }[0]
}
`;

export default {
  name: "siteHome",
  asyncData({ $sanity }) {
    const sanityCall = $sanity.fetch(query);
    // console.log('🎈 asyncData: called', sanityCall )
    return sanityCall;
  },

  computed: {
    seoTitle() {
      return "Ontario Overnight Summer Camp for Kids | Canadian Adventure Camp";
    },
    seoDescription() {
      return "Canadian Adventure Camp is an overnight summer camp for all children located on a beautiful private island in the wilderness lakes region of Temagami in Ontario Canada.";
    },
    seoPageUrl() {
      return "https://www.canadianadventurecamp.com/";
    },
    seoShareImage() {
      return `${this.siteHome.ogImageUrl}?w=1200&h=627&auto=format`;
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
