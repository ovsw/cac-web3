import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-XEJ31NQ67M' },
    pageTrackerTemplate: route => ({
      page_location: window.location.href,
      page_path: route.fullPath,
      page_title: document.title
    })
  }, app.router)
}
