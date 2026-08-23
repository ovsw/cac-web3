import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-XEJ31NQ67M' }
  })

  let lastTrackedPath
  const pendingPaths = new Set()

  const trackPageView = (route, from) => {
    if (lastTrackedPath === route.fullPath || pendingPaths.has(route.fullPath)) {
      return
    }

    pendingPaths.add(route.fullPath)
    const previousTitle = from && document.title

    const sendPageView = () => {
      lastTrackedPath = route.fullPath
      pendingPaths.delete(route.fullPath)
      Vue.$gtag.pageview({
        page_location: new URL(route.fullPath, window.location.origin).href,
        page_path: route.fullPath,
        page_title: document.title
      })
    }

    const sendWhenTitleIsReady = (frame = 0) => {
      if (!previousTitle || document.title !== previousTitle || frame >= 120) {
        sendPageView()
        return
      }

      requestAnimationFrame(() => sendWhenTitleIsReady(frame + 1))
    }

    Vue.nextTick(() => {
      requestAnimationFrame(() => sendWhenTitleIsReady())
    })
  }

  window.onNuxtReady(nuxt => {
    trackPageView(app.router.currentRoute)
    nuxt.$on('routeChanged', trackPageView)
  })
}
