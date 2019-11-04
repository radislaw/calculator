import { SET_MEMORY } from './mutationTypes'

export const state = () => ({
  memoryValue: ''
})

export const mutations = {
  [SET_MEMORY] (state, value) {
    state.memoryValue = value.toString()
    value
      ? localStorage.setItem('calculatorMemory', state.memoryValue)
      : localStorage.removeItem('calculatorMemory')
  }
}

export const actions = {
  getLocalMemory ({ commit }) {
    if (localStorage.getItem('calculatorMemory')) {
      try {
        const value = localStorage.getItem('calculatorMemory')
        commit('SET_MEMORY', value)
      } catch (e) {
        localStorage.removeItem('calculatorMemory')
      }
    }
  },
  memorySave ({ commit }, value) {
    commit('SET_MEMORY', value)
  },
  memoryPlus ({ state, commit }, value) {
    commit('SET_MEMORY', +state.memoryValue + +value)
  },
  memoryMinus ({ state, commit }, value) {
    commit('SET_MEMORY', +state.memoryValue - value)
  },
  memoryClear ({ commit }) {
    commit('SET_MEMORY', '')
  }
}
