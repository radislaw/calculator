<template>
  <section class="container">
    <div class="calculator">
      <input v-model="value" type="text" class="calculator-input">
      <div class="buttons-wrap">
        <div class="buttons-eng">
          <button v-for="button in buttonsEng" :key="button.value" class="button" :class="button.style">
            {{ button.value }}
          </button>
        </div>
        <div class="buttons">
          <button
            v-for="{value, style} in buttons"
            :key="value"
            class="button"
            :class="style"
            @click="addValue(value)"
          >
            {{ value }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {},
  data() {
    return {
      value: '',
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
          value: 'cos'
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
          style: 'accent'
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
  methods: {
    addValue(val) {
      this.value += val
    }
  }
}
</script>

<style lang="scss">

  .container {
    margin: 0 auto;
    min-height: 100vh;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .calculator {
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0;
    min-width: 600px;
    max-width: 600px;
    flex-direction: column;
    background-color: $darker;
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

  .calculator-input {
    color: $base;
    width: 100%;
    border: none;
    padding: .8rem;
    display: block;
    font-size: 2.4rem;
    background: none;
    text-align: right;
    font-weight: lighter;

    &:focus, &:active {
      outline: none;
    }
  }

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

  .button {
    width: 100%;
    color: $base;
    border: none;
    cursor: pointer;
    padding: 0.7rem;
    outline: none;
    font-size: 1.2rem;
    transition: all .3s ease-in-out;
    font-weight: 200;
    justify-content: center;
    background-color: $gray;
    box-shadow: 0 0 0 1px $darker;

    &.accent {
      background-color: $accent;
      color: $white;
    }

    &.gray {
      background-color: $dark;
    }

    &.action {
    }

    &:active {
      background-color: $darker;
    }

    &.col-2 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

</style>
