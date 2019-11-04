import { SET_SIMPLE_MODE } from './mutationTypes'

export const state = () => ({
  isSimpleMode: true
})

export const mutations = {
  [SET_SIMPLE_MODE] (state, bool) {
    state.isSimpleMode = bool
  }
}

export const actions = {
  toggleMode ({ state, commit }) {
    commit('SET_SIMPLE_MODE', !state.isSimpleMode)
  }
}
