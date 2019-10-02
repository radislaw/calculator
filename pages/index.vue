<template>
  <section class="container">
    <div class="calculator">
      <input type="number" class="calculator-input">
      <div class="buttons">
        <button v-for="button in buttons" :key="button.value" class="button">
          {{ button.value }}
        </button>
      </div>
      <!--      <div class="calculator-row">-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn gray action" @click="clear()">-->
      <!--            C-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn gray action" @click="del()">-->
      <!--            del-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn gray action" @click="addExpresion('%')">-->
      <!--            %-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn accent action" @click="addExpresion('/')">-->
      <!--            /-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="calculator-row">-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(7)">-->
      <!--            7-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(8)">-->
      <!--            8-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(9)">-->
      <!--            9-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn accent action" @click="addExpresion('*')">-->
      <!--            *-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="calculator-row">-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(4)">-->
      <!--            4-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(5)">-->
      <!--            5-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(6)">-->
      <!--            6-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn accent action" @click="addExpresion('-')">-->
      <!--            - -->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="calculator-row">-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(1)">-->
      <!--            1-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(2)">-->
      <!--            2-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn" @click="addExpresion(3)">-->
      <!--            3-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn accent action" @click="addExpresion('+')">-->
      <!--            +-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="calculator-row">-->
      <!--        <div class="calculator-col wide">-->
      <!--          <button class="calculator-btn" @click="addExpresion(0)">-->
      <!--            0-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn action" @click="addExpresion('.')">-->
      <!--            .-->
      <!--          </button>-->
      <!--        </div>-->
      <!--        <div class="calculator-col">-->
      <!--          <button class="calculator-btn accent action" @click="getResult()">-->
      <!--            =-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
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
      buttons: [
        {
          value: 'C'
        },
        {
          value: 'del'
        },
        {
          value: '%'
        },
        {
          value: '÷',
          type: 'operator'
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
          value: '×'
        },
        {
          value: 4
        },
        {
          value: 5
        },
        {
          value: '-'
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
          value: '+'
        },
        {
          value: 0
        },
        {
          value: '.'
        },
        {
          value: '='
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.container {
  margin:          0 auto;
  min-height:      100vh;
  padding-top:     2rem;
  display:         flex;
  justify-content: center;
  text-align:      center;
}

.calculator {
      width:            100%;
      margin:           0 auto;
      display:          flex;
      padding:          0;
      max-width:        320px;
      min-width:        320px;
      flex-direction:   column;
      background-color: $darker;
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
      color:       $base;
      width:       100%;
      border:      none;
      padding:     .8rem;
      display:     block;
      font-size:   2.4rem;
      background:  none;
      text-align:  right;
      font-weight: lighter;

      &:focus, &:active {
        outline: none;
      }
    }

  .buttons {
    display:               grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .button {
    width:            100%;
    color:            $base;
    border:           none;
    cursor:           pointer;
    padding:          .8rem;
    outline:          none;
    font-size:        1.6rem;
    transition:       all .3s ease-in-out;
    font-weight:      200;
    justify-content:  center;
    background-color: $gray;
    box-shadow:       0 0 0 1px $darker;

    &.accent {
      background-color: $accent;
      color:            $white;
    }

    &.gray {
      background-color: $dark;
    }

    &.action {
    }

    &:active {
      background-color: $darker;
    }
}

</style>
