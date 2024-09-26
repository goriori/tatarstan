<script setup lang="ts">
import SuccessSendIcon from '@/components/ui/icons/SuccessSendIcon.vue'
</script>

<template>
  <section class="status">
    <SuccessSendIcon />
    <div class="result">
      <h3 class="result-message">Фотография успешно отправлена</h3>
      <p class="result-description">
        Фотография на указанный электронный адрес была успешно отправлена.
      </p>
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
