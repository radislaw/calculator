<template>
  <button
    class="Button"
    :class="color"
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
    color: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style lang="scss" scoped>
  .Button {
    @extend .button;
    padding: 1.5rem 0.7rem;
    font-size: 1.5rem;
    font-weight: 200;
    background-color: white;
      &.accent {
        color: $blue-a700;
        font-weight: bold;
      }

    &.danger {
      color: $red-400;
    }

/*
      &.base {
        background-color: $dark;
      }
*/

      &.action {
        background-color: gray;
      }

      &:hover {
        background-color: $button-hover-bg;
      }

      &.col-2 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
  }
</style>
