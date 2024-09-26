import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useControllerStore = defineStore('controller', () => {
  const isFlash = ref(false)

  const getStateFlash = () => isFlash.value

  const toggleStateFlash = () => (isFlash.value = !isFlash.value)
  return {
    getStateFlash,
    toggleStateFlash,
  }
})
