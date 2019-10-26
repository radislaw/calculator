<template>
  <div class="Toast">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Toast'
}
</script>

<style lang="scss" scoped>
  .Toast {
    position: absolute;
    padding: 0.5rem 1rem;
    width: 80%;
    color: $white;
    background-color: rgba($black, 0.4);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 16px;
    text-align: center;
    opacity: 0;
    animation: fade-in-out 3s ease-in;
  }

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
