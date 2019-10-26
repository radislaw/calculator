<template>
  <input
    type="text"
    class="Display"
    :value="value"
    v-on="listeners"
  >
</template>

<script>
export default {
  name: 'Display',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      const vm = this
      return Object.assign({}, vm.$listeners, {
        input (e) {
          vm.$emit('input', e.target.value)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Display {
  padding:          4rem 1rem 1rem;
  background-color: $display-bg;
  color:            $display-color;
  font-size:        $display-font-size;
  width:            100%;
  outline:          0;
  border:           0;
  text-align:       right;
  height:           180px;
}
</style>
