<template>
  <div class="History">
    <ul class="list">
      <li
        v-for="({expression, result}, i ) in history"
        :key="i"
        class="item"
        @click="pasteResult(result)"
      >
        <div class="expression">
          {{ expression }}
        </div>
        <div class="result">
          ={{ result }}
        </div>
      </li>
    </ul>
    <VButton class="clear" @click.native="clearHistory">
      Очистить журнал
    </VButton>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VButton from '../ui/VButton/VButton'

export default {
  name: 'History',
  components: { VButton },
  computed: mapState('history', ['history']),
  methods: {
    ...mapActions('history', ['clearHistory']),
    pasteResult (result) {
      this.$emit('paste', result)
    }
  }
}
</script>

<style lang="scss" scoped>
  .History {
    position: relative;

    .list {
      @extend .list-unstyled;
      height: $work-area-height - 48;
      overflow-y: auto;
      text-align: right;
      display: flex;
      flex-direction: column-reverse;

      .item {
        padding: 0.875rem;
        border-bottom: 1px solid $gray-200;

        &:hover {
          background-color: $button-hover-bg;
          cursor: pointer;
        }
      }

      .expression {
        color: $gray-400;
        font-size: $md-font;
      }

      .result {
        color: $blue-a700;
      }
    }
    .clear {
      @extend .button;
      padding: 1rem;
      text-align: center;
      font-size: $md-font;
      color: $blue-a700;
      text-transform: uppercase;
    }
  }
</style>
