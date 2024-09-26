<script setup lang="ts">
import Card from '@/components/ui/cards/Card.vue'
import Image from '@/components/ui/image/Image.vue'
import Button from '@/components/ui/button/Button.vue'
import EyeDarkIcon from '@/components/ui/icons/EyeDarkIcon.vue'
import CameraWhiteIcon from '@/components/ui/icons/CameraWhiteIcon.vue'
import { ref } from 'vue'

type CProps = {
  image: string
  title: string
  description: string
}
type CEmits = {
  (eventName: 'onInfo'): void
  (eventName: 'onHideInfo'): void
  (eventName: 'onPhoto'): void
}
const emits = defineEmits<CEmits>()
defineProps<CProps>()

const baseURL = window.API
const isOpenMore = ref(false)

const onVisibleInfo = () => {
  isOpenMore.value = true
  emits('onInfo')
}
const onHideInfo = () => {
  isOpenMore.value = false
  emits('onHideInfo')
}
const onPhoto = () => emits('onPhoto')
const onInfo = () => {
  if (isOpenMore.value) onHideInfo()
  else onVisibleInfo()
}
</script>

<template>
  <Card rounded class="card">
    <template #card-center>
      <div class="card-content">
        <Image rounded :href="baseURL + image" class="preview" />
        <div class="right">
          <h3 class="card-title">{{ title }}</h3>
          <div class="card-description" v-html="description" />
          <div class="actions" @click.stop>
            <Button
              variant="quaternary"
              :outline="!isOpenMore"
              class="actions-item more"
              @on-click="onInfo"
            >
              <EyeDarkIcon />
              <p>{{ isOpenMore ? 'Скрыть подробнее' : 'Подробнее' }}</p>
            </Button>
            <Button
              variant="primary"
              class="actions-item photo"
              @on-click="onPhoto"
            >
              <CameraWhiteIcon />
              <p>Сделать фотку</p>
            </Button>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100%;
    line-height: normal;
  }

  &-title {
    font-size: 32px;
  }

  &-description {
    font-weight: 300;
    color: var(--fourth-color);
    font-size: 20px;
    max-width: 572px;
    max-height: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.right {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  &-item {
    display: flex;
    align-items: center;
    gap: 10px;

    &.more {
      width: auto;
    }

    &.photo {
      max-width: 250px;
    }
  }
}

.preview {
  max-width: 268px;
  height: 268px;
}
</style>
