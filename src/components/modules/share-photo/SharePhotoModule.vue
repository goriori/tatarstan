<script setup lang="ts">
import { ref } from 'vue'
import SendPhoto from '@/components/modules/share-photo/SendPhoto.vue'
import Button from '@/components/ui/button/Button.vue'
import SuccessSend from '@/components/modules/share-photo/SuccessSend.vue'
import ErrorSend from '@/components/modules/share-photo/ErrorSend.vue'

const stateShare = ref<'share' | 'success' | 'error'>('share')
const onSuccessShare = () => (stateShare.value = 'success')
const onErrorShare = () => (stateShare.value = 'error')

</script>

<template>
  <div class="module">
    <SendPhoto
      v-if="stateShare === 'share'"
      @on-success="onSuccessShare"
      @on-error="onErrorShare"
    />
    <SuccessSend v-else-if="stateShare === 'success'" />
    <ErrorSend v-else />
    <Button variant="quaternary" class="action action-redirect"
      >На главную
    </Button>
  </div>
</template>

<style scoped lang="scss">
.module {
  width: 100%;
  max-width: 706px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  border-radius: 32px;
  padding: 32px;
  background-color: #fff;
  color: #000;

  &-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
  }
}

.action {
  &-redirect {
    margin: 0 auto;
    max-width: 175px;
  }
}
</style>
