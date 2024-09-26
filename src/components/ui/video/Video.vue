<script setup lang="ts">
import {VProps} from "@/components/ui/video/types.ts";

defineProps<VProps>()
</script>

<template>
  <video :src="src" :autoplay="autoplay" :muted="autoplay" :loop="loop" :class="['video', {rounded}]"/>
</template>

<style scoped lang="scss">
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.rounded {
    border-radius: var(--radius-lg);
  }
}
</style>