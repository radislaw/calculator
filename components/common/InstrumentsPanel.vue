<template>
  <div class="InstrumentsPanel">
    <button
      class="panel__button"
      :disabled="!hasLogs"
      @click="toggleHistory"
    >
      <template v-if="isHistory">
        Клавиатура
      </template>
      <template v-else>
        Журнал
      </template>
    </button>

    <button class="panel__button" @click="toggleMode">
      <template v-if="isSimpleMode">
        Инженерный
      </template>
      <template v-else>
        Простой
      </template>
    </button>

    <button
      type="button"
      role="button"
      title="Удалить символ"
      class="panel__button"
      @click="deleteLastChar"
    >
      <svg-icon name="delete" class="delete" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'InstrumentsPanel',
  computed: {
    ...mapState('history', ['isHistory', 'hasLogs']),
    ...mapState('calculator', ['isSimpleMode'])
  },
  mounted () {

  },
  methods: {
    ...mapActions('history', ['toggleHistory']),
    ...mapActions('calculator', ['toggleMode']),
    deleteLastChar () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
  .InstrumentsPanel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .delete {
      width: 2rem;
      height: 10px;
    }
  }
</style>
