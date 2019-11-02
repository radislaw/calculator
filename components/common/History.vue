<template>
  <ul class="History">
    <li
      v-for="({expression, result}, i ) in history"
      :key="i"
      class="item"
      @click="pasteLog"
    >
      <div class="expression">
        {{ expression }}
      </div>
      <div class="result">
        {{ result }}
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
    this.getLocalHistory()
  },
  methods: {
    ...mapActions('history', ['getLocalHistory']),
    pasteLog () {

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

    .item {
      padding: 1rem;
      box-shadow: 0 0 0 1px $gray-200;
    }

    .expression {

    }

    .result {

    }
  }
</style>
