const state = {
  list: [
    {id: 1, name: 'First mission'},
    {id: 2, name: 'Escape'},
    {id: 3, name: 'Capture'},
    {id: 4, name: 'Destroy'},
    {id: 5, name: 'Find'},
    {id: 6, name: 'Defend'},
    {id: 7, name: 'Find II'},
    {id: 8, name: 'Escape II'},
    {id: 9, name: 'Destroy II'},
  ],
  currentLevel: null,
}

const actions = {
  updateCurrentLevel ({ commit }, payload) {
    commit('updateCurrentLevel', payload)
  }
}

const mutations = {
  updateCurrentLevel (state, payload) {
    state.currentLevel = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
