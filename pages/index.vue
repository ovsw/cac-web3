<template>
  <div>
    <Hero
      eyebrow="Welcome to"
      title="Canadian Adventure Camp"
      :image="siteHome.content.hero.image"
      buttonText="Our Programs"
    />

    <SectionsRenderer :sections="siteHome.content.sections" />
  </div>
</template>

<script>
const query = /* groq */ `{
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
