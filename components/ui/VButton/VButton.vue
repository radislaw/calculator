<template>
  <button
    type="button"
    role="button"
    class="VButton"
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
  name: 'VButton',
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
  .VButton {
    @extend .button;
    padding: 17px 0.7rem;
    font-size: 1.25rem;
    font-weight: 200;
    background-color: white;

    &.accent {
      color: $blue-a700;
      font-weight: bold;
    }

    &.danger {
      color: $red-400;
    }

    &.action {
      background-color: $gray-100;
    }

    &.col-2 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
</style>
