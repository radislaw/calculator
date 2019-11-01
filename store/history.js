import { SET_HISTORY, ADD_LOG, SET_IS_HISTORY } from './mutationTypes'

export const state = () => ({
  history: [],
  isHistory: false
})

export const mutations = {
  [SET_HISTORY] (state, history) {
    state.logs = history
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
        commit('SET_HISTORY', history)
      } catch (e) {
        localStorage.removeItem('calculatorHistory')
      }
    }
  },
  addLog ({ state, commit }, log) {
    commit('ADD_LOG', log)
    localStorage.setItem('calculatorHistory', JSON.stringify(state.logs))
  },
  clearHistory ({ commit }) {
    commit('SET_HISTORY', [])
    localStorage.removeItem('calculatorHistory')
  },
  toggleHistory ({ state, commit }) {
    commit('SET_IS_HISTORY', !state.isHistory)
  }
}
