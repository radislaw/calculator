<template>
  <div class="Display">
    <span
      v-for="(ch, i) in expressionDisplay"
      :key="i"
      :class="{'operator': isOperator(ch)}"
    >
      {{ ch }}
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Display',
  computed: {
    ...mapState('calculator', ['expressionDisplay']),
    isOperator () {
      const symbols = ['+', '-']
      return (ch) => {
        return symbols.includes(ch)
      }
    }
  },
  watch: {
    value (val) {
    }
    // if val.length > n {

    // }
  }
}
</script>

<style lang="scss" scoped>
.Display {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding:          4rem 1rem 1rem;
  background-color: $display-bg;
  color:            $display-color;
  font-size:        $display-font-size;
  width:            100%;
  outline:          0;
  border:           0;
  text-align:       right;
  height:           180px;

  .operator {
    color: $operator-color;
  }
}
</style>
