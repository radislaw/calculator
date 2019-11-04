import { SET_LAST_RESULT } from './mutationTypes'

export const state = () => ({
  isSimpleMode: true
})

export const mutations = {
  [SET_LAST_RESULT] (state, bool) {
    state.isSimpleMode = bool
  }
}

export const actions = {
  saveLastResult ({ commit }, value) {
    commit('SET_LAST_RESULT', value)
  },
  clearLastResult ({ commit }) {
    commit('SET_LAST_RESULT', '')
  }
}
