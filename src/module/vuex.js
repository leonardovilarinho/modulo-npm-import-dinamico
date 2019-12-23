export default {
  namespaced: true,
  state: {
    everyone: 'Teste'
  },
  getters: {
    getEveryone: (state) => state.everyone
  }
}
