import { SET_HISTORY, SET_LAST_RESULT, ADD_LOG, SET_IS_HISTORY } from './mutationTypes'

export const state = () => ({
  history: [],
  lastResult: '',
  isHistory: false
})

export const mutations = {
  [SET_HISTORY] (state, history) {
    state.history = history
  },
  [SET_LAST_RESULT] (state, result) {
    state.lastResult = result
  },
  [ADD_LOG] (state, log) {
    state.history.push(log)
  },
  [SET_IS_HISTORY] (state, bool) {
    state.isHistory = bool
  }
}

export const actions = {
  getLocalHistory ({ commit }) {
    if (localStorage.getItem('calculatorHistory')) {
      try {
        const history = JSON.parse(localStorage.getItem('calculatorHistory'))
        console.log('history', history)
        commit('SET_HISTORY', history)
      } catch (e) {
        localStorage.removeItem('calculatorHistory')
      }
    }
  },
  addLog ({ state, commit }, log) {
    commit('ADD_LOG', log)
    localStorage.setItem('calculatorHistory', JSON.stringify(state.history))
  },
  clearHistory ({ commit }) {
    commit('SET_HISTORY', [])
    localStorage.removeItem('calculatorHistory')
  },
  toggleHistory ({ state, commit }) {
    commit('SET_IS_HISTORY', !state.isHistory)
  }
}
