<template>
  <div class="Calculator">
    <Display
      v-model="value"
      @input="getPreview"
      @keypress.enter="calculate"
    />
    <div class="preview">
      {{ preview }}
    </div>
    <Toast v-if="isError">
      Недопустимый формат
    </Toast>
  </div>
</template>

<script>
import { create, all } from 'mathjs'
import { mapGetters } from 'vuex'

import Display from '../ui/Display/Display'
import Toast from '../ui/Toast/Toast'

const config = {}
const math = create(all, config)

export default {
  name: 'Calculator',
  components: { Toast, Display },
  data () {
    return {
      value: '',
      preview: '',
      isError: false
    }
  },
  computed: {
    ...mapGetters('buttons', ['symbols']),

    isOperator () {
      return (ch) => {
        return this.symbols.includes(ch)
      }
    }
  },
  mounted () {

  },
  methods: {
    getPreview () {
      try {
        this.preview = math.evaluate(this.value)
        this.isError = false
      } catch (e) {
      }
    },
    calculate () {
      try {
        this.value = math.evaluate(this.value).toString()
        this.preview = ''
        this.isError = false
      } catch (e) {
        this.isError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Calculator {
  width:  100%;
  height: 100vh;
  border: 1px solid $gray-200;
  position: relative;

  .preview {
    font-size:        1.5rem;
    text-align:       right;
    background-color: $preview-bg;
    color:            $preview-color;
    height:           62px;
    padding: 1rem;
  }
}
</style>
