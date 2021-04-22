<template>
  <div>
    <SectionsRenderer :sections="section.reusableSection.sections" />
  </div>
</template>

<script>
const query = /* groq */ `*[_type == 'reusableSection' && _id == $reusableSectionId][0]`;

export default {
  props: {
    section: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      reusedSectionContents: {}
    };
  },

  activated() {
    this.$fetch();
  },

  async fetch() {
    // console.log("propsss", this._props.section.reusableSection._ref);
    const reusedSectionId = this._props.section.reusableSection._ref;
    this.reusedSectionContents = await this.$nuxt.context.$sanity.fetch(query, {
      reusableSectionId: reusedSectionId
    });
  }
};
</script>

<style lang="scss" scoped></style>
