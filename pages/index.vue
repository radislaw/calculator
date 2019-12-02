<template>
  <section class="container">
    <Calculator />
  </section>
</template>

<script>
import Calculator from '../components/Calculator/Calculator'
export default {
  components: {
    Calculator
  }
}
</script>

<style lang="scss">
  .container {
    width: 100%;
    margin: 0 auto;
  }
</style>
