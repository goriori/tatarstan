<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import { useOnlineStatus } from '@/utils/useOnlineStatus.ts'
import { useApplicationStore } from '@/stores/app.store.ts'
import Alerts from '@/components/globals/alerts/Alerts.vue'
import Modals from '@/components/globals/modals/Modals.vue'
import { useInactivity } from '@/utils/useInactiveTime.ts'
import { useStateStore } from '@/stores/state.store.ts'
import ApplicationStateService from '@/services/application-state'

const route = useRoute()
const applicationStore = useApplicationStore()
const stateStore = useStateStore()
const { inactivityTime } = useInactivity(window.TIMEOUT)

const timersIds: number[] = []

const loadServerApplicationStateInterval = () => {
  const INTERVAL_REQUEST = 2000
  const intervalId = setInterval(async () => {
    stateStore.changeState(await ApplicationStateService.getStateApplication())
  }, INTERVAL_REQUEST)
  timersIds.push(intervalId)
}

const clearTimers = () => {
  timersIds.forEach((id) => {
    clearInterval(id)
    clearTimeout(id)
  })
}
onMounted(() => {
  loadServerApplicationStateInterval()
  // inactivityTime()
  const { isOnline } = useOnlineStatus()
  if (!isOnline.value)
    applicationStore
      .getAlert('error')
      ?.setSettings({ message: 'Отсутствует интернет соединение' })
      .onShow()
})

onUnmounted(() => {
  clearTimers()
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Alerts />
    <Modals />
    <template v-if="Component">
      <transition name="fade-page" mode="out-in">
        <suspense>
          <component :is="Component" :key="route.fullPath"></component>
        </suspense>
      </transition>
    </template>
  </RouterView>
</template>

<style scoped></style>
