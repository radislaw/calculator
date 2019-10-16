<template>
  <div contenteditable class="Display" @input="setExpression">
    <!--    <span-->
    <!--      v-for="(ch, i) in val"-->
    <!--      :key="i"-->
    <!--      :class="{'-highlight': isOperator(ch)}"-->
    <!--    >{{ ch }}</span>-->
  </div>
</template>

<script>
export default {
  name: 'Display',
  components: {},
  data () {
    return {}
  },
  computed: {},
  mounted () {

  },
  methods: {
    setExpression (e) {
      console.log('e.target:', e.target)
    }
  }
}
</script>

<style lang="scss" scoped>
.Display {
    color: $base;
    width: 100%;
    min-height: 70px;
    overflow-y: auto;
    border: none;
    padding: .8rem;
    font-size: 2.4rem;
    background-color: #eceff1;
    text-align: right;
    font-weight: lighter;
}
</style>
