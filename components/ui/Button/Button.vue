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
      width: 100%;
      color: $base;
      border: none;
      cursor: pointer;
      padding: 0.7rem;
      outline: none;
      font-size: 1.2rem;
      transition: all .3s ease-in-out;
      font-weight: 200;
      justify-content: center;
      background-color: $gray;
      box-shadow: 0 0 0 1px $darker;

      &.accent {
        background-color: $accent;
        color: $white;
      }

/*
      &.base {
        background-color: $dark;
      }
*/

      &.action {
        background-color: $dark;
      }

      &:active {
        background-color: $darker;
      }

      &.col-2 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
  }
</style>
