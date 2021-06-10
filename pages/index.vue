<template>
  <div>
    <Hero
      eyebrow="Welcome to"
      title="Canadian Adventure Camp"
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
  }
};
</script>
