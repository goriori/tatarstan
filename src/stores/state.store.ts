import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ApplicationState } from '@/services/application-state'

export const useStateStore = defineStore('state', () => {
  const state = ref<ApplicationState>({
    state: 'standby',
    data: {},
  })
  const changeState = (newState: ApplicationState) => {
    state.value = newState
  }
  const getState = () => state.value

  return {
    state,
    getState,
    changeState,
  }
})
