<template>
  <section>
    <Calculator />
    <!--    <div class="calculator">-->
    <!--      <div class="buttons-wrap">-->
    <!--        <div class="buttons-eng">-->
    <!--          <Button-->
    <!--            v-for="button in buttonsEng"-->
    <!--            :key="button.value"-->
    <!--            :color="button.style"-->
    <!--          >-->
    <!--            {{ button.value }}-->
    <!--          </Button>-->
    <!--        </div>-->
    <!--        <div class="buttons">-->
    <!--          <Button-->
    <!--            v-for="{value, style} in buttons"-->
    <!--            :key="value"-->
    <!--            :color="style"-->
    <!--            @click.native="addValue(value)"-->
    <!--          >-->
    <!--            {{ value }}-->
    <!--          </Button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

// import Button from '../components/ui/Button/Button'
import Calculator from '../components/Calculator/Calculator'
export default {
  components: {
    Calculator
    // Button
  },
  data () {
    return {
      val: '',
      buttonsEng: [
        {
          value: '('
        },
        {
          value: ')'
        },
        {
          value: 'mc'
        },
        {
          value: 'm+'
        },
        {
          value: 'm-'
        },
        {
          value: 'mr'
        },
        {
          value: '2nd'
        },
        {
          value: 'x2'
        },
        {
          value: 'x3'
        },
        {
          value: 'xy'
        },
        {
          value: 'ex'
        },
        {
          value: '10x'
        },
        {
          value: '1/x'
        },
        {
          value: '2√x'
        },
        {
          value: '∛x'
        },
        {
          value: 'x√x'
        },
        {
          value: 'In'
        },
        {
          value: 'log10'
        },
        {
          value: 'x!'
        },
        {
          value: 'sin'
        },
        {
          value: 'cos',
          style: 'action'
        },
        {
          value: 'tan'
        },
        {
          value: 'e'
        },
        {
          value: 'EE'
        },
        {
          value: 'Rad'
        },
        {
          value: 'sinh'
        },
        {
          value: 'cosh'
        },
        {
          value: 'tanh'
        },
        {
          value: 'π'
        },
        {
          value: 'Rand'
        }
      ],
      buttons: [
        {
          value: 'C'
        },
        {
          value: '±'
        },
        {
          value: '%'
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
          value: 0,
          style: 'col-2'
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
    isOperator () {
      return (ch) => {
        const operators = this.buttons.filter(btn => btn.type === 'operator')
        console.log('operators', operators)
        return operators
      }
    }
  },
  methods: {
    addValue (val) {
      this.val += val
    }
  }
}
</script>

<style lang="scss">

  /*.container {*/
  /*  margin: 0 auto;*/
  /*  min-height: 100vh;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  text-align: center;*/
  /*}*/

  .calculator {
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0;
    /*min-width: 600px;*/
    /*max-width: 600px;*/
    flex-direction: column;
    background-color: #eceff1;
    height: fit-content;
  }

  /*  .calculator-row {
  display:         flex;
  padding:         0;
  justify-content: space-around;
  flex-wrap:       wrap;

  .calculator-col {
    flex:       1;
    box-shadow: 0 0 0 1px $darker;

    &.wide {
      flex: 2;
    }
  }
} */

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .buttons-eng {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  .buttons-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

</style>
