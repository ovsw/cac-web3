export const state = () => ({
  showDrafPreviewBanner: false,
  newsSlugs: [],
  pagesSlugs: [],
})

export const mutations = {
  showBanner(state) {
    state.showDrafPreviewBanner = true
  },
  setNewsSlugs(state, slugs) {
    state.newsSlugs = slugs
  },
  setPagesSlugs(state, slugs) {
    state.pagesSlugs = slugs
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const newsSlugs = await $sanity
      .fetch('*[_type == "newsItem"].content.slug.current')
      .catch((e) => console.error(e))

    commit('setNewsSlugs', newsSlugs)
      
    const pagesSlugs = await $sanity
      .fetch('*[_type == "page"].content.slug.current')
      .catch((e) => console.error(e))
    //console.log('pagesSlugs')
    commit('setPagesSlugs', pagesSlugs)

    const pagesSimpleSlugs = await $sanity
      .fetch('*[_type == "pageSimple"].content.slug.current')
      .catch((e) => console.error(e))
    //console.log('pagesSlugs')

    const allPageSlugs = [...pagesSlugs, ...pagesSimpleSlugs]

    commit('setPagesSlugs', allPageSlugs)
  },
}
