<script setup lang="ts">
import Image from '@/components/ui/image/Image.vue'
import ShareForm from '@/components/ui/form/share-form/ShareForm.vue'
import { ref } from 'vue'

type SEmits = {
  (eventName: 'onSuccess'): void
  (eventName: 'onError'): void
}

const emits = defineEmits<SEmits>()
const isLoading = ref(false)
const sharePhoto = (_form: { email: string }) => {
  isLoading.value = true
  const TIMEOUT = 2000
  setTimeout(() => {
    isLoading.value = false
    emits('onSuccess')
  }, TIMEOUT)
}
</script>

<template>
  <h3 class="module-title">
    Сканируйте QR-код или введите<br />
    E-mail для получения фото
  </h3>
  <div class="module-qrcode">
    <p>Отсканируйте QR-код для получения вашей фотографии.</p>
    <Image href="/images/share-qrcode.png" class="qrcode" />
  </div>
  <div class="module-form">
    <p>
      Введите адрес электронной почты,<br />
      на которую будет отправлена фотография
    </p>
    <ShareForm :is-loading="isLoading" @on-send="sharePhoto" />
  </div>
</template>

<style scoped lang="scss">
.module {
  &-title {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
  }

  &-qrcode {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    font-weight: 300;
  }

  &-form {
    font-weight: 300;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

.qrcode {
  max-height: 214px;
  max-width: 214px;
}

.action {
  &-redirect {
    margin: 0 auto;
    max-width: 175px;
  }
}
</style>
