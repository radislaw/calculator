import {
  SET_HISTORY,
  ADD_LOG,
  SET_IS_HISTORY,
  SET_HAS_LOGS
} from './mutationTypes'

export const state = () => ({
  history: [],
  isHistory: false,
  hasLogs: false
})

export const mutations = {
  [SET_HISTORY] (state, history) {
    state.history = history
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
        if (Array.isArray(history)) {
          commit('SET_HISTORY', history)
          commit('SET_HAS_LOGS', true)
        } else {
          localStorage.removeItem('calculatorHistory')
        }
      } catch (e) {
        localStorage.removeItem('calculatorHistory')
      }
    }
  },
  addLog ({ state, commit }, log) {
    commit('ADD_LOG', log)
    localStorage.setItem('calculatorHistory', JSON.stringify(state.history))
    !state.hasLogs && commit('SET_HAS_LOGS', true)
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
