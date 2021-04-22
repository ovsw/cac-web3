<template>
  <div>
    <PageHeader
      :title="blogHome.content.title"
      :image="blogHome.content.headerImage"
    />
    <section>
      <div class="container mx-auto">
        <CardGridWrapper>
          <CardGrid
            v-for="post in posts"
            :key="post._key"
            :title="post.content.title"
            :date="post.content.publishedAt"
            :image="post.content.image"
            :description="post.content.excerpt"
            headingLvl="2"
            :url="`/blog/${post.content.slug.current}/`"
          />
        </CardGridWrapper>
      </div>
    </section>
  </div>
</template>

<script>
const query = /* groq */ `{
  "posts": *[_type == 'post' && (content.publishedAt < now())] | order(content.publishedAt asc),
  "blogHome": *[ _id == 'blogHome'][0]
}`;

export default {
  name: "BlogHome",
  asyncData({ $sanity }) {
    const sanityCall = $sanity.fetch(query);
    // console.log("🎈 asyncData: called", sanityCall);
    return sanityCall;
  }
};
</script>

<style lang="scss" scoped></style>
