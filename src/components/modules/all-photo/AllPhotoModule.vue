<script setup lang="ts">

import List from "@/components/ui/list/List.vue";
import ArrowIcon from "@/components/ui/icons/ArrowIcon.vue";
import Button from "@/components/ui/button/Button.vue";
import PhotoCard from "@/components/ui/cards/photo-card/PhotoCard.vue";
import PhotoList from "@/components/ui/list/photo-list/PhotoList.vue";
</script>

<template>
  <div class="module">
    <div class="module-head">
      <Button variant="white" class="action">
        <ArrowIcon/>
        <p>Назад</p>
      </Button>
      <h1>Все фотографии</h1>
    </div>
    <div class="module-list">
      <PhotoList/>
    </div>
    <div class="row">
      <p class="target">Выбрано: 2 фотографии</p>
      <Button variant="primary">Отправить</Button>
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

  &-head {
    display: flex;
    align-items: center;
    gap: 32px;

    .action {
      gap: 8px;
      flex: 0 1 164px;
      max-height: 56px;

      .icon {
        max-height: 24px;
        max-width: 24px;
      }
    }

    h1 {
      font-size: 48px;
    }
  }

  &-list {
    max-height: 1693px;
    overflow-y: auto;
    @include scrollbar();
  }

}

.row {
  max-width: 503px;
  max-height: 54px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  margin: 0 0 0 auto;
}

.target {
  font-size: 24px;
  flex: 1 0 303px;
}
</style>