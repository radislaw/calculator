<template>
  <ul class="History">
    <li
      v-for="({expression, result}, i ) in history"
      :key="i"
      class="item"
      @click="pasteResult"
    >
      <div class="expression">
        {{ expression }}
      </div>
      <div class="result">
        ={{ result }}
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'History',
  computed: mapState('history', ['history']),
  mounted () {
    console.log('werwwerwwwer')
    this.getLocalHistory()
  },
  methods: {
    ...mapActions('history', ['getLocalHistory']),
    pasteResult () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .History {
    height: $work-area-height;
    @extend .list-unstyled;
    overflow-y: auto;
    text-align: right;
    display: flex;
    flex-direction: column-reverse;

    .item {
      padding: 1.125rem;

      /*&:not(:first-child) {*/
        border-top: 1px solid $gray-200;
      /*}*/

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
</style>
