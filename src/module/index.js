import vuexModule from './vuex'


const Module = {
  async install (Vue, router, store, library) {
    // import dinamico
    const LayoutModule = () => import (`./layouts/${library.layout}`)
    const Layout = (await LayoutModule()).default

    store.registerModule('mymodule', vuexModule)
    router.addRoutes(Layout(Vue))

    Vue.prototype.$bus = new Vue()
    Vue.prototype.$library = library
  }
}

window.Module = Module

export default Module