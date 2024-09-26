<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  time: {
    type: Number,
    default: 5,
  },
})

const emits = defineEmits(['timerEnd', 'update:time'])

const timerArray = ref()
const currentTime = ref()

const startTimer = () => {
  setInterval(() => {
    if (currentTime.value === 0) emits('timerEnd')
    if (currentTime.value > 0) currentTime.value--
  }, 1000)
}

onMounted(() => {
  currentTime.value = props.time
  startTimer()
})
</script>

<template>
  <div class="timer">
    <div
      v-for="item in time"
      :class="['timer-item', { active: item >= currentTime }]"
    >
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'CanvasTimer';

.timer-item {
  color: v-bind(color);
}
</style>
