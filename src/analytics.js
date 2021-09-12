function createAnalytics(params) {
  let counter = 0
  let isDestroyed = false
  listner = () => counter++
  document.addEventListener('click', listner)
  return {
    destroy() {
      document.removeEventListener('click', listner)
      isDestroyed = true
    },
    getClicks() {
      if(isDestroyed) {
        return `Analytics is destroyed! Total clicks = ${counter}`
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()
