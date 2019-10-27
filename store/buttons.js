export const state = () => ({
  symbols: [
    {
      value: 1,
      type: 'number'
    },
    {
      value: '+',
      type: 'operator'
    }
  ]
})

export const getters = {
  operators: state => state.symbols
    .filter(btn => btn.type === 'operator')
    .map(btn => btn.value)
}
