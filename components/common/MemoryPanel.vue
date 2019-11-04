<template>
  <div class="MemoryPanel">
    <button
      v-for="{name, title, method} in buttons"
      :key="name"
      :title="title"
      class="panel__button"
      @click="method(lastResult)"
    >
      {{ name }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MemoryPanel',
  data () {
    return {
      buttons: [
        {
          name: 'MC',
          title: 'Очистить память',
          method: this.memoryClear
        },
        {
          name: 'MS',
          title: 'Сохранить значение в память',
          method: this.memorySave
        },
        {
          name: 'M+',
          title: 'Прибавить к значению в памяти',
          method: this.memoryPlus
        },
        {
          name: 'M-',
          title: 'Вычесть из значение в памяти',
          method: this.memoryMinus
        },
        {
          name: 'MR',
          title: 'Вставить значение из памяти',
          method: this.memoryRecall
        }
      ]
    }
  },
  mounted () {
    this.getLocalMemory()
  },
  methods: {
    ...mapActions('memory', [
      'getLocalMemory',
      'memoryClear'
    ]),
    memorySave () {
      this.$emit('memory-save')
    },
    memoryPlus () {
      this.$emit('memory-plus')
    },
    memoryMinus () {
      this.$emit('memory-minus')
    },
    memoryRecall () {
      this.$emit('memory-recall')
    }
  }
}
</script>

<style lang="scss" scoped>
  .MemoryPanel {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
</style>
