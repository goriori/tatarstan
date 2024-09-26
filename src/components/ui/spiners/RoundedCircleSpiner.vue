<script setup lang="ts">

</script>

<template>
  <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 121" fill="none">
    <path
        d="M24.9 63.08C28.7701 84.18 46.16 100.08 67.03 100.08C90.75 100.08 108.63 79.5 109.98 54.2C110.98 35.36 100.53 16.7 77.41 6.31997C67.2612 1.80122 55.9354 0.63816 45.0801 2.99997C67.3101 -3.02003 86.61 3.01997 99.68 13.66C107.88 20.12 115.8 28.99 119 38.06C121.251 44.4485 122.522 51.141 122.77 57.91C122.77 92.31 95.9 120.21 61.51 120.21C46.7521 120.216 32.4718 114.98 21.2153 105.436C9.95887 95.8918 2.45796 82.6601 0.0500488 68.1C0.620049 52.28 19.88 49.87 24.88 63.08H24.9Z"
        fill="#BBB9B8"/>
  </svg>
</template>

<style scoped lang="scss">
.loader {
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>