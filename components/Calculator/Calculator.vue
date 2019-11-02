<template>
  <div class="Calculator" :class="{'-eng': !isSimpleMode}">
    <Display
      v-model="expression"
      @input="getPreview"
      @keypress.enter="calculate"
    />
    <div class="preview">
      {{ preview }}
    </div>
    <InstrumentsPanel />
    <div class="memory-panel">
      <button type="button" class="panel__button">
        MC
      </button>
      <button class="panel__button">
        MS
      </button>
      <button class="panel__button">
        M+
      </button>
      <button class="panel__button">
        M-
      </button>
      <button class="panel__button">
        MR
      </button>
    </div>

    <div v-if="!isHistory" class="buttons-wrap">
      <div v-if="!isSimpleMode" class="buttons -eng">
        <Button
          v-for="{value, style} in buttonsEng"
          :key="value"
          :color="style"
        >
          <!--        @click.native="addValue(value)"-->
          {{ value }}
        </Button>
      </div>

      <div class="buttons">
        <Button
          v-for="{symbol, value, style, method} in buttons"
          :key="symbol"
          :color="style"
          @click.native="method(value)"
        >
          {{ symbol }}
        </Button>
      </div>
    </div>

    <History v-else />

    <Toast v-if="isError">
      Недопустимый формат
    </Toast>
  </div>
</template>

<script>
import { create, all } from 'mathjs'
import { mapState, mapActions } from 'vuex'

import Display from '../ui/Display/Display'
import Toast from '../ui/Toast/Toast'
import Button from '../ui/Button/Button'
import InstrumentsPanel from '../common/InstrumentsPanel'
import History from '../common/History'

const config = {}
const math = create(all, config)

export default {
  name: 'Calculator',
  components: { History, InstrumentsPanel, Button, Toast, Display },
  data () {
    return {
      isSimpleMode: true,
      expression: '',
      preview: '',
      isError: false,
      buttonsEng: [
        {
          value: 'x2'
        },
        {
          value: 'xy'
        },
        {
          value: 'sin'
        },
        {
          value: 'cos'
        },
        {
          value: 'tan'
        },
        {
          value: 'x3'
        },
        {
          value: 'y√x'
        },
        {
          value: 'sin-1'
        },
        {
          value: 'cos-1'
        },
        {
          value: 'tan-1'
        },
        {
          value: '√'
        },
        {
          value: '10x'
        },
        {
          value: 'log'
        },
        {
          value: 'Exp'
        },
        {
          value: 'Mod'
        },
        {
          value: '1/x'
        },
        {
          value: 'ex'
        },
        {
          value: 'In'
        },
        {
          value: 'dms'
        },
        {
          value: 'deg'
        },
        {
          value: '|x|'
        },
        {
          value: 'π'
        },
        {
          value: 'x!'
        },
        {
          value: 'Rand'
        },
        {
          value: 'EE'
        }

        // {
        //   value: 'tan'
        // },
        // {
        //   value: 'e'
        // },
        // {
        //   value: 'EE'
        // },
        // {
        //   value: 'Rad'
        // },
        // {
        //   value: 'sinh'
        // },
        // {
        //   value: 'cosh'
        // },
        // {
        //   value: 'tanh'
        // }
      ],
      buttons: [
        {
          symbol: 'C',
          value: null,
          style: 'danger',
          method: this.clear
        },
        {
          symbol: '( )',
          actualValue: null,
          style: 'accent',
          method: this.addParentheses
        },
        {
          symbol: '%',
          value: '%',
          style: 'accent',
          method: this.addValue
        },
        {
          symbol: '÷',
          value: '/',
          style: 'accent',
          method: this.addOperator
        },
        {
          symbol: 7,
          value: '7',
          method: this.addValue
        },
        {
          symbol: 8,
          value: '8',
          method: this.addValue
        },
        {
          symbol: 9,
          value: '9',
          method: this.addValue
        },
        {
          symbol: '×',
          value: '*',
          style: 'accent',
          method: this.addOperator
        },
        {
          symbol: 4,
          value: '4',
          method: this.addValue
        },
        {
          symbol: 5,
          value: '5',
          method: this.addValue
        },
        {
          symbol: 6,
          value: '6',
          method: this.addValue
        },
        {
          symbol: '-',
          value: '-',
          style: 'accent',
          type: 'operator',
          method: this.addOperator
        },
        {
          symbol: 1,
          value: '1',
          method: this.addValue
        },
        {
          symbol: 2,
          value: '2',
          method: this.addValue
        },
        {
          symbol: 3,
          value: '3',
          method: this.addValue
        },
        {
          symbol: '+',
          value: '+',
          style: 'accent',
          method: this.addOperator
        },
        {
          symbol: '±',
          value: null,
          method: this.changeSign
        },
        {
          symbol: 0,
          value: '0',
          method: this.addValue
        },
        {
          symbol: '.',
          value: '.',
          method: this.addValue
        },
        {
          symbol: '=',
          value: null,
          style: 'accent',
          method: this.calculate
        }
      ]
    }
  },
  computed: {
    // ...mapGetters('buttons', ['symbols']),
    ...mapState('history', ['isHistory']),
    isOperator () {
      return (ch) => {
        return this.symbols.includes(ch)
      }
    },
    lastChar () {
      return this.expression.slice(-1)
    }
  },
  mounted () {

  },
  methods: {
    ...mapActions('history', ['addLog']),
    createChar (char) {
      return () => ({
        symbol: 'C',
        value: null,
        style: 'danger',
        method: this.clear
      })
    },
    createNumberChar (num) {

    },
    getPreview () {
      try {
        this.preview = this.solver()
        this.isError = false
      } catch (e) {
        this.isError = false
      }
    },
    calculate () {
      try {
        // this.expression = math.evaluate(this.expression).toString()
        const exp = this.expression
        this.expression = this.solver().toString()
        // this.addLog(`${exp} ${this.expression}`)
        this.addLog({
          expression: exp,
          result: this.expression
        })
        this.preview = ''
        this.isError = false
      } catch (e) {
        console.log('e:', e)
        this.isError = true
      }
    },
    clear () {
      this.expression = ''
      this.preview = ''
    },
    changeMode () {
      this.isSimpleMode = !this.isSimpleMode
    },
    deleteLastChar () {
      this.expression = this.expression.slice(0, -1)
      this.getPreview()
    },
    addValue (val) {
      this.expression += val
      this.getPreview()
    },
    addOperator (val) {
      this.expression && this.addValue(val)
    },
    percent (val) {
      this.addValue(val)
      console.log('val:', val)
    },
    addParentheses () {
      let par = ')'
      if (this.expression && isNaN(+this.lastChar) && this.expression.indexOf('(') === this.expression.lastIndexOf('(')) {
        par = '('
      }
      this.addValue(par)
    },
    changeSign () {
      this.addValue('(-')
    },
    solver () {
      const pcntOfRegC = /[0-9]*\.?[0-9]%[ ]*of[ ]*/g
      const pcntOfReg = /%[ ]*of[ ]*/g
      const pcntReg = /[0-9]*\.?[0-9]%/g
      const modReg = /[0-9]*\.?[0-9]%[0-9]*\.?[0-9]/g
      const numReg = /[0-9]*\.?[0-9]/g

      console.log(444, this.expression)

      if (this.expression.match(pcntOfRegC)) {
        this.expression = this.expression.replace(pcntOfReg, '/100*')
      }

      if (this.expression.match(modReg)) {
        const modVals = this.expression.match(modReg)
        modVals.forEach(function (modVal) {
          this.expression = this.expression.replace(modVal, String(math.evaluate(modVal)))
        })
      }

      while (this.expression.match(pcntReg) && !this.expression.match(modReg)) {
        const right = this.expression.match(pcntReg)[0]
        const left = this.expression.split(right)[0]
        const leftTrim = left.trim()
        let leftVal = leftTrim.slice(0, -1)

        leftVal = String(math.evaluate(leftVal))

        const pcntVal = right.match(numReg)[0]
        let newval = leftVal + '*' + pcntVal + '/100'

        newval = String(math.evaluate(newval))
        this.expression = this.expression.replace(left + right, String(math.evaluate(left + newval)))
      }

      return math.evaluate(this.expression)
    }

  }
}
</script>

<style lang="scss" scoped>
.Calculator {
  width:     100%;
  max-width: 375px;
  margin:    0 auto;
  border:    1px solid $gray-200;
  position:  relative;

  .preview {
    font-size:        1.5rem;
    text-align:       right;
    background-color: $preview-bg;
    color:            $preview-color;
    height:           4rem;
    padding: 1rem;
  }

  .memory-panel {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &.-eng {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &.-eng {
    max-width: 812px;

    .buttons-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
