import { SET_EXPRESSION, SET_PREVIEW, SET_SIMPLE_MODE } from './mutationTypes'

export const state = () => ({
  expressionDisplay: '',
  expressionActual: '',
  preview: '',
  isSimpleMode: true
})

export const mutations = {
  [SET_EXPRESSION] (state, expression) {
    state.expressionDisplay = expression.display
    state.expressionActual = expression.actual
  },
  [SET_PREVIEW] (state, value) {
    state.preview = value
  },
  [SET_SIMPLE_MODE] (state, bool) {
    state.isSimpleMode = bool
  }
}

export const actions = {
  toggleMode ({ state, commit }) {
    commit('SET_SIMPLE_MODE', !state.isSimpleMode)
  },
  addValue ({ commit }, value) {
    commit('SET_EXPRESSION', value)
  }
}
