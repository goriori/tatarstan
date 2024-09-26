<script setup lang="ts">
import VCanvas from '@/components/modules/v-canvas/VCanvas.vue'
</script>

<template>
  <div class="page">
    <VCanvas class="canvas" />
  </div>
</template>

<style scoped lang="scss">
.canvas {
  position: absolute;
  top: 0;
}
</style>
