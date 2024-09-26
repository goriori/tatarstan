<script setup lang="ts">

import LightningIcon from "@/components/ui/icons/LightningIcon.vue";
import Button from "@/components/ui/button/Button.vue";
import {computed} from "vue";
import {useControllerStore} from "@/stores/controller.store.ts";


const controllerStore = useControllerStore()
const stateOn = computed(() => controllerStore.getStateFlash())
const variant = computed(() => stateOn.value ? 'primary' : 'white')
const onSwitch = () => {
  controllerStore.toggleStateFlash()
}
</script>

<template>
  <Button :variant="variant" class="action" @on-click="onSwitch">
    <LightningIcon class="action-icon"/>
    {{ !stateOn ? ' Включить вспышку' : 'Выключить вспышку' }}
  </Button>
</template>

<style scoped lang="scss">
.action {
  width: 100%;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  font-size: 48px;

  &-icon {
    fill: #fff;
    max-width: 128px;
    max-height: 128px;
  }
}
</style>