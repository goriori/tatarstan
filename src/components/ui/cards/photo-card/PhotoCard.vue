<script setup lang="ts">

import Image from "@/components/ui/image/Image.vue";
import Card from "@/components/ui/cards/Card.vue";
import Button from "@/components/ui/button/Button.vue";
import ZoomIcon from "@/components/ui/icons/ZoomIcon.vue";
import CheckIcon from "@/components/ui/icons/CheckIcon.vue";
import {ref} from "vue";

type PEmits = {
  (eventName: 'onZoom', zoom: boolean): void
  (eventName: 'onTarget', target: boolean): void
}

const emits = defineEmits<PEmits>()
const isZoom = ref(false)
const isTarget = ref(false)
const toggleZoom = () => {
  isZoom.value = !isZoom.value
  emits('onZoom', isZoom.value)
}
const toggleTarget = () => {
  isTarget.value = !isTarget.value
  emits('onTarget', isTarget.value)
}
</script>

<template>
  <Card class="card">
    <template #card-top>
      <Button
          :variant="isZoom ? 'primary' : 'white' "
          class="action action-zoom"
          @on-click="toggleZoom"
      >
        <ZoomIcon class="action-icon"/>
      </Button>
    </template>
    <template #card-center>
      <Image href="/images/generate-photo.png" rounded class="background"/>
    </template>
    <template #card-bottom>
      <Button
          :variant="isTarget ? 'primary' : 'white' "
          class="action action-target"
          @on-click="toggleTarget"
      >
        <CheckIcon v-if="isTarget" class="action-icon"/>
        <p v-else>Выбрать</p>
      </Button>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.card {
  position: relative;
  width: 100%;
  height: 779px;

  ::v-deep(.card-center) {
    height: 100%;
  }
}

.action {
  width: 100%;
  z-index: 2;
  padding: 0;
  height: 56px;

  &-icon {
    max-width: 24px;
  }

  &-zoom {
    width: 56px;
    margin: 0 0 0 auto;
  }
}
</style>