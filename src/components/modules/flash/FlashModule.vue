<script setup lang="ts">
import FlashFeature from "@/features/flash/FlashFeature.vue";
import {computed} from "vue";
import {useControllerStore} from "@/stores/controller.store.ts";

const controllerStore = useControllerStore()
const stateOn = computed(() => controllerStore.getStateFlash())
</script>

<template>
  <div class="module">
    <h1>{{ !stateOn ? 'Вспышка выключена' : 'Вспышка включена' }}</h1>
    <FlashFeature/>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins';

.module {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 952px;

  h1 {
    font-size: 48px;
  }

}

</style>