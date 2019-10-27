<template>
  <div class="Calculator">
    <Display
      v-model="value2"
      @input="getPreview"
      @keypress.enter="calculate"
    />
    <div class="preview">
      {{ preview }}
    </div>
    <div class="instruments-panel">
      <button type="button" class="memory-button">
        Журнал
      </button>
      <button class="memory-button">
        смена
      </button>
      <button class="memory-button">
        удалить
      </button>
    </div>
    <div class="memory-panel">
      <button type="button" class="memory-button">
        MC
      </button>
      <button class="memory-button">
        MS
      </button>
      <button class="memory-button">
        M+
      </button>
      <button class="memory-button">
        M-
      </button>
      <button class="memory-button">
        MR
      </button>
    </div>

    <div class="buttons">
      <Button
        v-for="{value, style} in buttons"
        :key="value"
        :color="style"
      >
        <!--        @click.native="addValue(value)"-->
        {{ value }}
      </Button>
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
import Button from '../ui/Button/Button'

const config = {}
const math = create(all, config)

export default {
  name: 'Calculator',
  components: { Button, Toast, Display },
  data () {
    return {
      value2: '',
      preview: '',
      isError: false,
      buttons: [
        {
          value: 'C',
          style: 'danger'
        },
        {
          value: '( )',
          style: 'accent'
        },
        {
          value: '%',
          style: 'accent'
        },
        {
          value: '÷',
          style: 'accent'
        },
        {
          value: 7
        },
        {
          value: 8
        },
        {
          value: 9
        },
        {
          value: '×',
          style: 'accent'
        },
        {
          value: 4
        },
        {
          value: 5
        },
        {
          value: 6
        },
        {
          value: '-',
          style: 'accent',
          type: 'operator'
        },
        {
          value: 1
        },
        {
          value: 2
        },
        {
          value: 3
        },
        {
          value: '+',
          style: 'accent'
        },
        {
          value: '±'
        },
        {
          value: 0
        },
        {
          value: ','
        },
        {
          value: '=',
          style: 'accent'
        }
      ]
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
        this.preview = math.evaluate(this.value2)
        this.isError = false
      } catch (e) {
      }
    },
    calculate () {
      try {
        this.value = math.evaluate(this.value2).toString()
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
  border: 1px solid $gray-200;
  position: relative;

  .preview {
    font-size:        1.5rem;
    text-align:       right;
    background-color: $preview-bg;
    color:            $preview-color;
    height:           4rem;
    padding: 1rem;
  }

  .instruments-panel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .memory-panel {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .memory-button {
    text-align: center;
    padding: 0.5rem;
    border: 1px solid $gray-200;
    background-color: $gray-100;
    border-right: none ;
    cursor: pointer;
    outline: none;

    &:first-child {
      border-left: none;
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
