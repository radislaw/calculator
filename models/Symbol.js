export default class Symbol {
  char = ''

  value = ''

  style = ''

  method = ''

  constructor (data) {
    Object.assign(this, data)
  }
}
