import {
  SET_HISTORY,
  SET_LAST_RESULT,
  ADD_LOG,
  SET_IS_HISTORY,
  SET_HAS_LOGS
} from './mutationTypes'

export const state = () => ({
  history: [],
  lastResult: '',
  isHistory: false,
  hasLogs: false
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
  },
  [SET_HAS_LOGS] (state, bool) {
    state.hasLogs = bool
  }
}

export const actions = {
  getLocalHistory ({ commit }) {
    if (localStorage.getItem('calculatorHistory')) {
      try {
        const history = JSON.parse(localStorage.getItem('calculatorHistory'))
        commit('SET_HISTORY', history)
        commit('SET_HAS_LOGS', true)
      } catch (e) {
        localStorage.removeItem('calculatorHistory')
      }
    }
  },
  addLog ({ state, commit }, log) {
    commit('ADD_LOG', log)
    localStorage.setItem('calculatorHistory', JSON.stringify(state.history))
    commit('SET_HAS_LOGS', true)
  },
  clearHistory ({ commit }) {
    commit('SET_HISTORY', [])
    localStorage.removeItem('calculatorHistory')
    commit('SET_IS_HISTORY', false)
    commit('SET_HAS_LOGS', false)
  },
  toggleHistory ({ state, commit }) {
    commit('SET_IS_HISTORY', !state.isHistory)
  }
}
