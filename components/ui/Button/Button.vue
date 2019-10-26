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
      color: black;
      border: none;
      cursor: pointer;
      padding: 1.5rem 0.7rem;
      outline: none;
      font-size: 1.5rem;
      transition: all .3s ease-in-out;
      font-weight: 200;
      justify-content: center;
      background-color: white;
      box-shadow: 0 0 0 1px $gray-200;

      &.accent {
        color: $blue-a700;
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
        background-color: #E1F5FE;
      }

      &.col-2 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
  }
</style>
