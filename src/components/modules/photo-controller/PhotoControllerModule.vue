<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import DeletePhotoFeature from "@/features/delete-photo/DeletePhotoFeature.vue";
import SendPhotoFeature from "@/features/send-photo/SendPhotoFeature.vue";
import SaveCloudPhotoFeature from "@/features/save-cloud-photo/SaveCloudPhotoFeature.vue";
</script>

<template>
  <div class="module">
    <h1>Выберите действие</h1>
    <div class="module-actions column">
      <div class="row">
        <DeletePhotoFeature/>
        <SendPhotoFeature/>
      </div>
      <div class="row">
        <SaveCloudPhotoFeature/>
      </div>
      <div class="row">
        <Button variant="white" class="module-action">Посмотреть все сделанные фото</Button>
      </div>
    </div>
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

  &-action {
    width: 100%;
    padding: 32px;
    font-weight: bold;
    font-size: 48px;
  }
}

.column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.row {
  max-height: 291px;
  display: flex;
  gap: 32px;
}


</style>