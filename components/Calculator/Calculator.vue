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

    <InstrumentsPanel
      @delete="deleteLastChar"
    />

    <MemoryPanel
      @memory-save="mSave"
      @memory-plus="mPlus"
      @memory-minus="mMinus"
      @memory-recall="memoryRecall"
    />

    <div v-if="!isHistory" class="buttons-wrap">
      <div v-if="!isSimpleMode" class="buttons -eng">
        <VButton
          v-for="{symbol, value, style, method} in buttonsEng"
          :key="value"
          :color="style"
          @click.native="method(value)"
        >
          {{ symbol }}
        </VButton>
      </div>

      <div class="buttons">
        <VButton
          v-for="{symbol, value, style, method} in buttons"
          :key="symbol"
          :color="style"
          @click.native="method(value)"
        >
          {{ symbol }}
        </VButton>
      </div>
    </div>

    <History
      v-else
      @paste="pasteFromHistory"
    />

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
import VButton from '../ui/VButton/VButton'
import InstrumentsPanel from '../common/InstrumentsPanel'
import History from '../common/History'
import MemoryPanel from '../common/MemoryPanel'

const config = {}
const math = create(all, config)

export default {
  name: 'Calculator',
  components: { MemoryPanel, VButton, History, InstrumentsPanel, Toast, Display },
  data () {
    return {
      lastResult: '',
      isCalculated: false,
      expression: '',
      preview: '',
      isError: false,
      buttonsEng: [
        {
          symbol: 'x2',
          value: '^(2)',
          style: 'action',
          method: this.addValue

        },
        {
          symbol: 'xy',
          value: '^(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'sin',
          value: 'sin(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'cos',
          value: 'cos(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'tan',
          value: 'tan(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'x3',
          value: '^(3)',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: '3√x',
          value: 'cbrt(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'asin',
          value: 'asin(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'acos',
          value: 'acos(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'atan',
          value: 'atan(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: '√',
          value: 'sqrt(',
          style: 'action',
          method: this.addValue
        },
        // {
        //   // todo
        //   symbol: '10x',
        //   value: '10x',
        //   style: 'action',
        //   method: this.addValue
        // },
        {
          symbol: 'log',
          value: 'log(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'Exp',
          value: 'exp(',
          style: 'action',
          method: this.addValue
        },
        // {
        //   // todo
        //   symbol: 'Mod',
        //   value: 'mod(',
        //   style: 'action',
        //   method: this.addValue
        // },
        {
          symbol: '1/x',
          value: '1/',
          style: 'action',
          method: this.addValue
        },
        // {
        //   // todo
        //   symbol: 'ex',
        //   value: '',
        //   style: 'action',
        //   method: this.addValue
        // },
        // {
        //   symbol: 'log',
        //   value: 'log(',
        //   style: 'action',
        //   method: this.addValue
        // },
        // {
        //   value: 'dms'
        // },
        {
          symbol: 'deg'
        },
        {
          symbol: '|x|',
          value: 'abs(',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'π',
          value: Math.PI,
          style: 'action',
          method: this.addValue
        },
        {
          // todo
          symbol: 'x!',
          value: 'x!',
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'Rand',
          value: Math.random(),
          style: 'action',
          method: this.addValue
        },
        {
          symbol: 'e',
          value: Math.E,
          style: 'action',
          method: this.addValue
        }
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
    ...mapState('calculator', ['isSimpleMode']),
    ...mapState('history', ['isHistory']),
    ...mapState('memory', ['memoryValue']),
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
    this.getLocalHistory()
  },
  methods: {
    ...mapActions('calculator', ['saveLastResult']),
    ...mapActions('history', ['addLog', 'getLocalHistory', 'toggleHistory']),
    ...mapActions('memory', [
      'memorySave',
      'memoryPlus',
      'memoryMinus'
    ]),
    mSave () {
      this.calculate()
      this.memorySave(this.lastResult)
    },
    mPlus () {
      this.calculate()
      this.memoryPlus(this.lastResult)
    },
    mMinus () {
      this.calculate()
      this.memoryMinus(this.lastResult)
    },
    memoryRecall () {
      this.expression += this.memoryValue
    },
    pasteFromHistory (value) {
      this.expression += value
      this.toggleHistory()
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
      if (this.expression) {
        try {
          const prevValue = this.expression
          this.expression = this.solver().toString()
          this.lastResult = this.expression
          this.isCalculated = true
          this.addLog({
            expression: prevValue,
            result: this.expression
          })
          this.preview = ''
          this.isError = false
        } catch (e) {
          console.log(e)
          this.isError = true
        }
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
      if (this.isCalculated && !Number.isNaN(val)) {
        this.expression = ''
      }
      this.expression += val
      this.getPreview()
      this.isCalculated = false
    },
    addOperator (val) {
      this.expression && this.addValue(val)
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

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &.-eng {
      grid-template-columns: repeat(4, 1fr);
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
