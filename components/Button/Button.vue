<template>
  <button
    class="Button"
    :class="style"
  >
    <!-- @slot Текст кнопки-->
    <slot />
  </button>
</template>

<script>
/**
   * Базовая кнопка.
   * @displayName Button
   */
export default {
  name: 'Button',
  props: {
    /**
       * Стиль кнопки
       */
    style: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style lang="scss" scoped>
  .Button {
    background-color: red;
  }
</style>
