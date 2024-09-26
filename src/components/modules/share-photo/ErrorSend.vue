<script setup lang="ts">
import ErrorSendIcon from '@/components/ui/icons/ErrorSendIcon.vue'
</script>

<template>
  <section class="status">
    <ErrorSendIcon />
    <div class="result">
      <h3 class="result-message">Произошла ошибка</h3>
      <p class="result-description">Пожалуйста, попробуйте еще раз</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.status {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &-message {
    font-size: 32px;
  }

  &-description {
    font-size: 20px;
  }
}
</style>
